let n
init()

setInterval(()=>{
  makeLeave(getImage(n))
    .one('transitionend', (e)=>{
      makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
  n++
  n=x(n)
  console.log(n)
},3000)























function init(){
  n = 1
  $('.images > img:nth-child(1)').addClass('current')
  $('.images > img:nth-child(2)').addClass('enter')
  $('.images > img:nth-child(3)').addClass('enter')
}

function getImage(n){
  return $(`.images > img:nth-child(${x(n)})`)
}

function makeCurrent($node){
  return $node.removeClass('enter').addClass('current')
}

function makeLeave($node){
  return $node.removeClass('current').addClass('leave')
}

function makeEnter($node){
  return $node.removeClass('leave').addClass('enter')
}

function x(n){
  n=n%3
  if(n===0){
    n=3
  }
  return n
}