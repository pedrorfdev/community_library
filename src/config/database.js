import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('library_db.sqlite', (err) => {
    if (err) {
      console.log('Erro ao conectar ao banco de dados:', err.message);
    } else {
      console.log('Conectado com sucesso ao banco de dados SQLite!');
    }
})

export default db