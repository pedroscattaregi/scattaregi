const config = {
  baseURL: 'https://preprod-cms-react.tudus.com.br/',
  users: {
    qaTest: {
      username: 'qatesteagile@mailinator.com',
      password: 'agile123456'      
    },
    anotherUser: {
      username: 'anotherUser@mailinator.com',
      password: 'anotherUser123456'
    }    
  },
  screen: {
    width: 1024,
    height: 768  
  },
  headless: false,
  browser: 'chrome' // 'chrome' or 'firefox'
};

module.exports = config;