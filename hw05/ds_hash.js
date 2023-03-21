class HashTable {
  constructor() {
    this.values = {};
    this.length =  0;
    this.size =  0;
  }
  calculateHash(key) {
    return key.toString().length % this.size;
  }
  add_update(key, value) {
    const hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
       this.length++;
    }
    this.values[hash][key] = value;
  }
  delete(key) {
    const hash = this.calculateHash(key);
    if (this.values[hash].hasOwnProperty(key)) {
       this.values[hash][key] = null;
       this.length--;
    }
  }
  search(key) {
     const hash = this.calculateHash(key);
     if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
       return this.values[hash][key];
     } else {
       return null;
     }
  }
}
//Создание таблицы типа hash table
const ht = new HashTable();
//добавление данных в hash table ht
ht.add_update("Director", "1");
ht.add_update("ZDOB", "100");
ht.add_update("ZDUP", "200");
ht.add_update("ZDEF", "300");
ht.add_update("GIS",  "400");
//Поиск
console.log(ht.search("ZDEF"));
//Размер таблицы
console.log(ht.length);
//Изменение
ht.add_update("ZDEF",  "500");
//Поиск
console.log(ht.search("ZDEF"));
//Размер таблицы
console.log(ht.length);
//Удаление
ht.delete("ZDEF");
//Поиск
console.log(ht.search("ZDEF"));
//Размер таблицы
console.log(ht.length);