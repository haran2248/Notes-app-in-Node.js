const getNotes=require('./notes.js')
const chalk=require('chalk')
const yards=require('yargs')

yards.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string',
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string',

        }
    },
    handler:function(argv)
    {

        getNotes.addNote(argv.title,argv.body)
    }
})
yards.command({
    command:'remove',
    describe:'Remove a new note',
    handler:function(argv)
    {
        getNotes.removeNote(argv.title)
    }
})
yards.command({
    command:'read',
    describe:'Reading a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv)
    {
        console.log('reading a new note')
        getNotes.readNote(argv.title)
    }
})
yards.command({
    command:'List',
    describe:'List a new note',
    handler:function()
    {
        getNotes.listNotes()
    }
})
yards.parse()
