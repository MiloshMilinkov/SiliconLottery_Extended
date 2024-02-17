using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;

namespace Infrastructure.Data
{
    public class BasketRepository : IBasketRepository
    {
        // private readonly IDatabase _database;
        // public BasketRepository(IConnectionMultiplexer redis){
        //     _database=redis.GetDatabase();
        // }
        // public async Task<bool> DeleteBasketAsync(string basketId)
        // {
        //     return await _database.KeyDeleteAsync(basketId);
        // }

        // public async Task<CustomerBasket> GetBasketAsync(string basketId)
        // {
        //     var data= await _database.StringGetAsync(basketId);
        //     return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<CustomerBasket>(data);
        // }

        // public async Task<CustomerBasket> UpdateOrCreateBasketAsync(CustomerBasket customerBasket)
        // {
        //     var created=await _database.StringSetAsync(
        //         customerBasket.Id,
        //         JsonSerializer.Serialize(customerBasket),
        //         TimeSpan.FromDays(30)
        //     );
        //     if(!created){
        //         return null;
        //     }
        //     return await GetBasketAsync(customerBasket.Id);
        // }
        private readonly StoreContext _context;

        public BasketRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<bool> DeleteBasketAsync(string basketId)
        {
            var basket = await _context.CustomerBaskets.Include(b => b.Items).FirstOrDefaultAsync(b => b.Id == basketId);
            if (basket == null) return false;

            _context.CustomerBaskets.Remove(basket);
            await _context.SaveChangesAsync();
            return true;
        }
        
        public async Task<CustomerBasket> GetBasketAsync(string basketId)
        {
            return await _context.CustomerBaskets.Include(b => b.Items).FirstOrDefaultAsync(b => b.Id == basketId);
        }
        public async Task<CustomerBasket> UpdateOrCreateBasketAsync(CustomerBasket customerBasket)
{
    var existingBasket = await _context.CustomerBaskets
                                       .Include(b => b.Items)
                                       .FirstOrDefaultAsync(b => b.Id == customerBasket.Id);

    if (existingBasket == null)
    {
        _context.CustomerBaskets.Add(customerBasket);
    }
    else
    {
        // Update existing basket
        _context.Entry(existingBasket).CurrentValues.SetValues(customerBasket);

        // Update existing items or add new ones
        foreach (var item in customerBasket.Items)
        {
            var existingItem = existingBasket.Items.FirstOrDefault(i => i.Id == item.Id);
            if (existingItem == null)
            {
                existingBasket.Items.Add(item); // Add new item
            }
            else
            {
                _context.Entry(existingItem).CurrentValues.SetValues(item); // Update existing item
            }
        }

        // Remove items that are no longer present in the updated basket
        foreach (var existingItem in existingBasket.Items.ToList())
        {
            if (!customerBasket.Items.Any(i => i.Id == existingItem.Id))
            {
                _context.BasketItems.Remove(existingItem);
            }
        }
    }

    try
    {
        await _context.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException ex)
    {
        // Log the exception (consider using a logging framework)
        
        // If the entity was deleted since it was loaded, refresh the entry or handle the conflict
        if (!_context.CustomerBaskets.Any(b => b.Id == customerBasket.Id))
        {
            // The basket was deleted since it was loaded, handle accordingly
            // For example, you might want to add it again or throw a custom exception
        }
        else
        {
            // If there are other concurrency conflicts, you might want to retry or handle differently
            // For example, reload the entity and retry the operation
            // or let the user know the operation could not be completed
        }
    }

    // If the save was successful, or after handling the conflict, return the basket
    return await GetBasketAsync(customerBasket.Id);
}

    }
}