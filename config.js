const PAGE_URL = process.env.NODE_ENV === 'production'
    ? 'placeholder'
    : 'http://localhost:3001';

// const MONGO_URI = process.env.NODE_ENV === 'production'
// ?  process.env.MONGO_URI_PROD
// :   process.env.MONGO_URI_TEST

    module.exports = {PAGE_URL};
    // pagina para exportar cosas