﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Api.Extensions
{
    public static class CompressionExtension
    {
        public static IServiceCollection AddCompression(this IServiceCollection services)
        {
            services.Configure<GzipCompressionProviderOptions>(
            options =>
            {
                options.Level = System.IO.Compression.CompressionLevel.Optimal;
            });

            services.AddResponseCompression(options =>
            {
                options.Providers.Add<GzipCompressionProvider>();
                options.EnableForHttps = true;
            });

            return services;
        }
    }
}
