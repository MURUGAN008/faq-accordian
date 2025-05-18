console.log("Comeback murugan!");
const toggleImg=()=>{

}
const hideOtherAnswers=(clickedNo)=>{
    let answerArray=[1,2,3,4];
    for (let index = 0; index < answerArray.length; index++) {
        if((index+1)!=clickedNo){
            const answerElement=document.querySelector(`.p${index+1}`);
            console.log(answerElement);
            if(answerElement.classList.contains("answer-p-show")){
                let element=answerElement.parentElement.parentElement.querySelector("img");
                element.src="./assets/images/icon-plus.svg";
                answerElement.classList.remove("answer-p-show");
                
            }
            // else{
            //     element.src="./assets/images/icon-minus.svg";
            //     answerElement.classList.add("answer-p-show");
            // }
        }
        
    }
}
const showAnswer = () =>{
    const showBtns=document.querySelectorAll(".show-answer-btn");
    showBtns.forEach(element => {
        element.addEventListener("keydown",(e)=>{
            if(e.key=="Enter"||e.key==""){
                let qno=element.classList.value;
                // qno=qno.split("-")[1];
                qno=qno[qno.length-1];
                let answer=`.p${qno}`;
                hideOtherAnswers(qno);
                let answerElement=document.querySelector(answer);
                if(answerElement.classList.contains("answer-p-show")){
                    element.src="./assets/images/icon-plus.svg";
                    answerElement.classList.remove("answer-p-show");
                    // element.classList.replace("onClick","onClick");
                }
                else{
                    element.src="./assets/images/icon-minus.svg";
                    answerElement.classList.add("answer-p-show");
                    // element.classList.replace("onClick","onClick");
                }
                console.log(element.src);
            }
        })
        element.addEventListener("click",()=>{
            // let classes=;
            if(element.classList.contains('show-answer-btn')){
                
                let qno=element.classList.value;
                // qno=qno.split("-")[1];
                qno=qno[qno.length-1];
                let answer=`.p${qno}`;
                hideOtherAnswers(qno);
                let answerElement=document.querySelector(answer);
                if(answerElement.classList.contains("answer-p-show")){
                    element.src="./assets/images/icon-plus.svg";
                    answerElement.classList.remove("answer-p-show");
                    
                }
                else{
                    element.src="./assets/images/icon-minus.svg";
                    answerElement.classList.add("answer-p-show");
                }
                console.log(element.src);
                // answerElement.classList.toggle("answer-p-show");

            }
        })
    });
    // create logic based on btn number in class name
}
showAnswer();