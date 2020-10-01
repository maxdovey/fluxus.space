artists_list = [ 'AY-O.json',
'Albert M. Fine.json',
'Alison Knowles.json',
'Ben Vautier.json',
'Bengt Af Klintberg.json',
'Bici Forbes.json',
'Bob Lens.json',
'Davi Het Thompson.json',
'Dick Higgins.json',
'Emmet Williams.json',
'Eric Anderson.json',
'George Brecht.json',
'George Maciunas.json',
'Jackson Mac Low.json',
'Jean Dupuy.json',
'Jed Curtis.json',
'Joe Jones.json',
'Ken Friedman.json',
'Larry Miller.json',
'Lee Heflin.json',
'Luce Fierens.json',
'Mieko Shiomi.json',
'Milan Knizak.json',
'Nam June Paik.json',
'Peter Frank.json',
'Richard Maxfield.json',
'Robert Bozzi.json',
'Robert Watts.json',
'Takehisa Kosugi.json',
'Thomas Schmit.json',
'Willem de Ridder.json',
'Yoko Ono.json' ]

function Choose_Artist(data,success) {
    var Chosen_Artist = artists_list[Math.floor(Math.random() * artists_list.length)];
    var path = directoryPath+Chosen_Artist; 
    console.log(path)
}

//     $.getJSON(path, function(data){
//     const JSONObject = JSON.parse(data);
//     console.log(JSONObject);
//     // data = data;
//     // key = (Object.keys(JSONObject))
//     // values = (Object.values(JSONObject))
//   })
//   .done(function() {
//   artist_name = Chosen_Artist.slice(0, -5)
//   return artist_name;

// }).fail(function(){
  
//     console.log("An error has occurred.");
  
//   })
    // const JSONObject = JSON.parse(data);    
    // key = (Object.keys(JSONObject))
    // values = (Object.values(JSONObject))
    // artist_name = Chosen_Artist.slice(0,-5)
    // success = true;
    // if (success) {
    //     var randomnumber = Math.floor(Math.random() * (key.length))
    //     var msg_body = (key[randomnumber]+"\n\n"+values[randomnumber]+"\n"+artist_name)
    //     console.log(msg_body)
    //     // Send_SMS(msg_body);
    // }
