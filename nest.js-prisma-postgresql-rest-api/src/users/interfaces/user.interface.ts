export interface User {
    id: string; // Varsayılan olarak bir kullanıcıya bir ID atanacağını varsayalım
    name: string;
    email: string;
    password: string; // Güvenlik sebebiyle, genellikle şifrelerin hashlenmiş versiyonları saklanır
  }