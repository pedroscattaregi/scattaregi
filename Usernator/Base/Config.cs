using Microsoft.Extensions.Configuration;
using System.IO;

namespace Usernator.Base
{
    class Config
    {
        private readonly IConfigurationRoot _configuration;
        private static Config _instance = null;

        private Config()
        {
            var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json");            
            _configuration = builder.Build(); 
        }

        public static Config Instance()
        {
            if (_instance == null)
            {
                _instance = new Config();
            }
            return _instance;
        }

        public string MibUrl => _configuration["mibUrl"];
        public string MibAuthorizationUrl => _configuration["mibAuthorizationUrl"];

        public MibUser AdminUser => new MibUser() 
        { 
            Username = _configuration["adminUser:username"],
            Password = _configuration["adminUser:password"]
        };
    }
}