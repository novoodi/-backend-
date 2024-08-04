const express = require("express")
const OpenAI = require("openai")
const app=express()
app.use(express.json())

const openai = new OpenAI({
    apiKey:"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"
    
})
app.get('/getRespense',async(req,res)=>{
    const userPrompt = req.body.userPrompt;
    console.log(userPrompt)
    const response = await openai.chat.completions.create({
        model:'gpt-3.5-turbo',
        messages :[{"role":"user","content":"hi"}],
        max_tokens:100
    })
  
    console.log(response.choices[0].message.content)
})

app.listen(3000, () =>{
    console.log("server started")
})