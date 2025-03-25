/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://isabelaholanda2006.github.io/random_math_operation/',
    generateRobotsTxt: true,
    exclude: ['/pages/operation_page/*', '/*.xml'],
  }