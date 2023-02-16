
# React ve Flask ile yapılmış TODO uygulaması

Kendimi geliştirmek için yaptığım basit bir uygulama.


## Ekran Görüntüleri

![Uygulama Ekran Görüntüsü](https://media.discordapp.net/attachments/426444040393850881/1074346003882311740/todo.png)

  
## API Kullanımı

```http
  GET /api/
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | Bensezsiz kimliğini döndürür|
| `title`      | `string` | Todo'nun başlığını döndürür|
| `created_At`      | `timeDate` | Todo'nun oluşturulduğu tarihi döndürür|
| `isDone`      | `boolean` | Todo'nun yapılıp yapılmadığı döndürür|


```http
  POST /api/
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | Todo'nun başlığı|

```http
  PULL /api/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `isDone`      | `boolean` | Todo'nun yapılıp yapılmadığı|


```http
  DELETE /api/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | Bensezsiz kimlik|


  
