import fs from "fs";
import chalk from 'chalk';
// async file write
fs.writeFile("./async.txt", "this asyns firle", (error) => {
  console.log(error);
});

// fs.writeFileSync("./sync.txt", "this is sync file ");
fs.writeFileSync("./sync.txt", "this is sync file ");

const result = fs.readFileSync("./sync.txt", "utf-8");
console.log(result);

fs.readFile("./async.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});


fs.appendFile("./async.txt","hello man your doing good kept up",(err,result)=>{
  if(err===null){
    console.log(err);
  }else{
    console.log(result);
  }
});

fs.appendFileSync("./sync.txt","doing good man");

fs.unlink("./async.txt",err=>{console.log(err)});
fs.unlink("./sync.txt",(err)=>{});

const king=chalk.hex('#ffff2f');
const log=console.log;
log(king("sumit"));
log(chalk.red.bgBlue("hello world"));