using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure.Services
{
    public class ResponseCacheService : IResponseCacheService
    {
        private readonly IDatabase _database;
        //connection to redis database
        public ResponseCacheService(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }

        public async Task CacheResponseAsync(string cacheKey, object response, TimeSpan timeToLive)
        {
                if (response == null){
                    return;
                }

                var options = new JsonSerializerOptions{
                    PropertyNamingPolicy =JsonNamingPolicy.CamelCase
                };

                var serialisedResponse = JsonSerializer.Serialize(response, options);
                await _database.StringSetAsync(cacheKey, serialisedResponse, timeToLive);
        }

        //get the response by the cacheKet which is nothing else but the query sent as a request
        // if the sent query matches what is cached return the response 
        public async Task<string> GetCachedResponseAsync(string cacheKey)
        {
            var cachedReponse = await _database.StringGetAsync(cacheKey);
            if(cachedReponse.IsNullOrEmpty){
                return null;
            }

            return cachedReponse;
        }
    }
}