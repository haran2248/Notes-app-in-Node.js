const fs=require('fs')
const chalk=require('chalk')
const getNotes=()=> {
    return 'hi'
    
}
const readNote=(title)=>{
    const noteRead=loadNotes()
    const nr=noteRead.find((note)=> note.title===title)
    if(nr)
   {
    console.log(nr.body)
    
   }
    else
    {
        console.log('No note found')
    }
  
}


const removeNotes=(title)=>{
    const notem=loadNotes()
    const removal=notem.filter((notem)=>{
        return notem.title!==title
    })
    const check=notem.filter((notem)=>{
        return notem.title===title
    })
    saveNotes(removal)
    if(check.length===0)
    {
        console.log(chalk.bgRed('note not found'))
    }
    else
    {
        console.log(chalk.green('note removed'))
    }

}
const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>{
        return note.title===title
    })
    if(duplicateNotes.length===0)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('new note added!')
    }
    else{
        console.log('Note title taken!')
    }



}
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}
const loadNotes=function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return[]
    }

    
}
const listNotes=()=>{
    const list=loadNotes()
    console.log(chalk.green('your notes'))
   list.forEach((note)=>{
       console.log(note.title)
       
   });

}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNotes,
    listNotes:listNotes,
    readNote:readNote
}