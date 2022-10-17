
/*
Many of the benefits of TypeScript come when we start working with objects. 

We can describe objects with types and TypeScript helps us write functions
to manipulate them safely.
*/

// 1. Imagine we’re creating a music playing app. We will have lots of different
//    object types: songs, artists, albums, etc. With TypeScript we can refer
//    to our definitions of the types and always know what a particular
//    object should look like. In the data.json file you have some sample bands.
//    Create a type of Band so that it describes the shape of the objects defined.

// 2. Write a function called describeBand to return a description of a band. 
//    You may want to re-use functions you’ve written in exercise 1.
//    For example:
//      describeBand(ironMaiden) ->
//        'Iron Maiden are a Heavy Metal band with 6 members, formed in 1975.'

// 3. Now do something similar for solo artists. There share similarities with
//    bands but have some differences too. Again, you’ll find sample data in the
//    data.json file. Use TypeScript to help describe that.
//    For example:
//      describeSoloArtist(adele)
//        -> 'Adele is a Pop artist, born in 1988.'

// 4. In our music application, we want to have some functions that run on
//    artists. We should be able to call those functions with any artist,
//    whether they are a band or a solo artist.

//    Create an Artist type. Try to keep your code as DRY as you can. See if you
//    can re-use code you’ve already written.

// 5. Then write a function called describeArtist to describe any
//    artist, whether it is a band or solo artist. Inside this function
//    return the right description for the type of artist it is.
//    For example: 
//      describeArtist(ironMaiden) === describeBand(ironMaiden) // true
//      describeArtist(adele) === describeSoloArtist(adele) // true

export { describeBand, describeSoloArtist, describeArtist };
