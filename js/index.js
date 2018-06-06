window.onload=function(){
var arr=0;
var speed=0;
var timer=null;
var op=0
function start(obj,att,long){
	clearInterval(obj.timer)
	op=0
     obj.timer=setInterval(function(){
         arr=parseInt(getComputedStyle(obj)[att])
         speed=(long-arr)/8
         speed>0?speed=Math.ceil(speed):speed=Math.floor(speed)
         if(long==arr){
          if(subnav.offsetHeight==0){
               subnav.style.borderTop='1px solid white'
             }   
         	  clearInterval(obj.timer)

         }else{
             if(att=='opacity'){
             obj.style.opacity=op/20
             op++
             }else{
             	obj.style[att]=speed+arr+'px'
             }         	 
         }
       },26)
  }
//购物车
  var car=document.getElementsByClassName('car')[0]
  car.children[0].onmouseover=function(){
  	   start(car.children[1],'height',98)
  }
   car.children[0].onmouseout=function(){
  	   start(car.children[1],'height',0)
  }
//导航
   var nav=document.getElementsByClassName('nav')[0]
   var subnav=document.getElementsByClassName('subnav')[0]
   var box=subnav.getElementsByTagName('ul')
   for(var i=0;i<nav.children.length;i++){
    	nav.children[i].index=i

   	   nav.children[i].onmouseover=function(){
   	   	  if(this.index>7){
          	   start(subnav,'height',0)
          	   subnav.style.borderTop="0px"
          	   return false
          }
   	   	  for(var i=0;i<box.length;i++){
   	   	  	   box[i].style.display='none'
   	   	  }
   	   	  subnav.style.borderTop='1px solid  #e1e1e1'
          box[this.index].style.display='block'
          start(subnav,'height',250)
          for(var i=0;i<box[this.index].children.length;i++){
          	var a=box[this.index].children[i].children[0].children[0]
          	    if(a.innerHTML==''){
          	    	 a.style.visibility='hidden'
          	    }
          }

   	   }
   	   nav.children[i].onmouseout=function(){
   	   	       start(subnav,'height',0)
   	   }
   	   subnav.onmouseover=function(){
   	   	    start(subnav,'height',250)

   	   }
   	   subnav.onmouseout=function(){
   	   	    start(subnav,'height',0)
          
   	   }
   }
   var fo=document.getElementById('form')
   fo.children[0].onfocus=function(evs){ 
   	   this.style.border='1px solid #ff6700'
   	   fo.children[2].style.border='1px solid #ff6700'
   	   fo.children[3].style.display='block'
       start(fo.children[1],'opacity',0)  	  
   }
   document.onclick=function(){
   	   fo.children[0].style.border='1px solid #e0e0e0'
   	   fo.children[2].style.border='1px solid #e0e0e0'
   	   fo.children[3].style.display='none'
       start(fo.children[1],'opacity',1)  
   	   
   }
   fo.onclick=function(ev){
   	      	var ev=ev||event
           if(ev.stopPropagation){
   	   	    	ev.stopPropagation()
   	   	    }else{
   	   	    	 	ev.cancelBubble=true
   	   	    }
   	   }
//banner
  var banner=document.getElementsByClassName('banner')[0]
  var le=document.getElementById('left')
  var rig=document.getElementsByClassName('rig')[0]
  var ul=document.getElementsByClassName('ul')[0]
  var ul_li=ul.getElementsByTagName('li')
  // var b_ol=document.getElementsByClassName('b_ol')[0]

  // var o_li=b_ol.getElementsByTagName('li')
  var nu=0;
  var z=9;
  var ti=null;
  var ol=document.createElement('ol')
      ol.className='b_ol'
  for(var i=0;i<ul_li.length;i++){
      var ol_li=document.createElement('li')  
      ol.appendChild(ol_li)      
  }
  banner.children[0].appendChild(ol)  
  // for(var i=0;i<o_li.length;i++){
  //      o_Li[i].index=i
  //      o_li[i].onclick=function(){
  //        if(nu>ul_li.length-2){
  //            nu=0
  //        }
  //        nu++
  //        z++
  //          ul_li[this.index].style.opacity=0
  //          ul_li[this.index].style.zIndex=z
  //          start(ul_li[this.index],'opacity',1) 

  //      }
  // }
  var b_ol=document.getElementsByClassName('b_ol')[0]
  var b_ol_li=b_ol.children
  for(var i=0;i<b_ol_li.length;i++){
      b_ol_li[i].index=i
      b_ol_li[i].onclick=function(){
             ul_li[this.index].style.opacity=0
             ul_li[this.index].style.zIndex=z 
             for(var i=0;i<b_ol_li.length;i++){
                 b_ol_li[i].className=''
             }
             this.className='ba'
             z++
             start(ul_li[this.index],'opacity',1)
             num=this.index
      }
       b_ol_li[i].onmouseover=function(){
              clearInterval(ti)
      }
       b_ol_li[i].onmouseout=function(){
              s()
      }
  }
 rig.onclick=function(){
         if(nu>ul_li.length-2){
             nu=0
         }

         nu++
         z++
          ul_li[nu].style.opacity=0
         ul_li[nu].style.zIndex=z 

         start(ul_li[nu],'opacity',1)

  }
   le.onclick=function(){
         if(nu==0){
             nu=ul_li.length-2
         }

         nu--
         z++
          ul_li[nu].style.opacity=0
         ul_li[nu].style.zIndex=z 

         start(ul_li[nu],'opacity',1)

  }
  function g(obj){
    obj.onmouseover=function(){
       clearInterval(ti)
  }
    obj.onmouseout=function(){
         s()
    }
  }
   g(le) 
   g(rig)
  s()
function s(){
   ti=setInterval(function(){
        if(nu>ul_li.length-2){
             nu=0
         }
         nu++
         z++
         for(var i=0;i<b_ol_li.length;i++){
            b_ol_li[i].className=''
         }
         b_ol_li[nu].setAttribute('class','ba_ol_li')
          ul_li[nu].style.opacity=0
         ul_li[nu].style.zIndex=z 

         start(ul_li[nu],'opacity',1)    
  },3000)
}
 
  var list=document.getElementsByClassName('list')[0]
  var list_ul=list.getElementsByTagName('li')
  var l_box=document.getElementsByClassName('box')[0]
  var a=0
  for(var i=0;i<list_ul.length;i++){
    list_ul[i].index=i
        list_ul[i].onmouseover=function(){
           for(var i=0;i<l_box.children.length;i++){
              l_box.children[i].style.display='none'
             
           }
           l_box.children[this.index].style.display='block'
           a=this.index

        }
        l_box.onmouseover=function(){        
           l_box.children[a].style.display='block'
        }
        l_box.onmouseout=function(){
          
           l_box.children[a].style.display='none'
        }
         list_ul[i].onmouseout=function(){
           for(var i=0;i<l_box.children.length;i++){
              l_box.children[i].style.display='none'
             
           }          
        }
  }

//倒计时
  var hour=document.getElementsByClassName('h')[0]
  var minutes=document.getElementsByClassName('f')[0]
  var seconds=document.getElementsByClassName('m')[0]
  //截止的时间
  var tian=new Date().getDay()
  var endDate=new Date(2018,5,tian,17,0,0)
  var end=endDate.getTime()
  
  setInterval(function(){
      //当前的时间
      var now=new Date().getTime()
      //时间差
      var cha=endDate-now
      if(cha==0){
          tian+=1
      }
      var z=cha/1000
       hour.innerHTML=fn(parseInt(z/60/60%24))
       minutes.innerHTML=fn(parseInt(z/60%60))
       seconds.innerHTML=fn(parseInt(z%60))
       function fn(a){
             if(a<10){
                 a='0'+a
             }
                  return a
             
       }
  },1000)

//main
//hidden
  var info_silder=document.getElementsByClassName
  ('info_silder')
for(var d=0;d<info_silder.length;d++){
  info_silder[d].a=d
    for(var i=0;i<info_silder[d].children.length;i++){
      for(var e=0;e<info_silder[d].children[i].children[0].children.length;e++){
        var m=info_silder[d].children[i].children[0].children[e]
        if(m.children[0].children[0].innerHTML==''){
              m.children[0].children[0].style.visibility='hidden'
        }
         m.onmouseover=function(){
           if(this.parentNode.parentNode.parentNode.a==0){ 
                  return false
             }
            start(this.children[4],'opacity',1)
            start(this.children[4],'bottom',0)
            this.className='shadow'
          } 
          m.onmouseout=function(){

            if(this.parentNode.parentNode.parentNode.a==0){ 
                  return false
             } 
            start(this.children[4],'opacity',0) 
            start(this.children[4],'bottom',-100)
            this.className=''
          }  
           } 
       for(var e=0;e<info_silder[d].children[i].children[0].children.length;e++){
       
         var j=info_silder[d].children[i].children[1].children[e]
         j.index=e
         if(j.children[0].children[0].innerHTML==''){
              j.children[0].children[0].style.visibility='hidden'
        }
         j.onmouseover=function(){
             if(this.index==3||this.parentNode.parentNode.parentNode.a==0){ 
                  return false
             }
             start(this.children[4],'opacity',1)
            start(this.children[4],'bottom',0)
            this.className='shadow'

          } 
          j.onmouseout=function(){
            if(this.index==3||this.parentNode.parentNode.parentNode.a==0){ 
                  return false
             } 
              start(this.children[4],'opacity',0) 
            start(this.children[4],'bottom',-100)
             this.className=''
          }   
       }    
           
  }
}
 //选项卡
 var info_title=document.getElementsByClassName('info_title')
var o=10;
 for(var t=0;t<info_title.length;t++){ 
  info_title[t].y=t
   var title_ul=info_title[t].children[1]
    for(var i=0;i<title_ul.children.length;i++){
        title_ul.children[i].index=i
        title_ul.children[i].onmouseover=function(){
             for(var i=0;i<title_ul.children.length;i++){
                   title_ul.children[i].style.color='#424242'
                    title_ul.children[i].style.borderBottom='2px solid #f5f5f5 '
                    
             }
             this.style.color='#ff6700'
             this.style.borderBottom='2px solid #ff6700'
             alert(this.parentNode.parentNode.y)
             var n=info_silder[this.parentNode.y].getElementsByClassName('hi')[this.index]
             n.style.zIndex=o
             o++
        }
     }
 }
//为你推荐
  var r=0
 var rec_title=document.getElementsByClassName('rec_title')[0]
 var rec_bt=rec_title.getElementsByTagName('span')
 var rec_hid=document.getElementsByClassName('rec_hid')[0]
   rec_bt[0].onclick=function(){
        if(r==1){ 
            this.style.color='#e0e0e0'
             rec_bt[1].style.color='#b0b0b0'
            return false
               

        }
             this.style.color='#b0b0b0'
        r++
        start(rec_hid,'left',r*-1230)
        
   }
    rec_bt[1].onclick=function(){
        if(r==0){
          this.style.color='#e0e0e0' 
           rec_bt[0].style.color='#b0b0b0'
            return false
           
        }
        this.style.color='#b0b0b0'
        r--
        start(rec_hid,'left',r*-1230)
        
   }
var top_title=document.getElementsByClassName('top_title')[0]
var top_sp=top_title.getElementsByTagName('span')
var m_=document.getElementsByClassName('m_')[0]
var y=0
 top_sp[0].onclick=function(){
        if(y==1){
            return false
        }
        y++
        start(m_,'left',y*-996)
        
   }
   top_sp[1].onclick=function(){
        if(y==0){
            return false
        }
        y--
        start(m_,'left',y*-996)
        
   }
//content
var content_box=document.getElementsByClassName('content_box')

for(var i=0;i<content_box.length;i++){
  //创建ol
  var con_ol=document.createElement('ol')
      con_ol.className='con_ol'
   content_box[i].appendChild(con_ol)
   for(var h=0;h<content_box[i].children[2].children.length;h++){
      var con_li=document.createElement('li')
     con_ol.appendChild(con_li)
  }
  var con_ol=document.getElementsByClassName('con_ol')
  for(var g=0;g<content_box[i].children[2].children.length;g++){
       
        content_box[i].q=i
        con_ol[i].children[g].index=g
        con_ol[i].children[g].onclick=function(){    
           
            for(var r=0;r<content_box[this.parentNode.parentNode.q].children[3].children.length;r++){
                   console.log(r)
                   con_ol[this.parentNode.parentNode.q].children[r].className='l'
            }
            this.className='lu' 
            this.parentNode.parentNode.j=this.index
            start(this.parentNode.parentNode.children[2],'left',this.index*-297)
        }
  } 
  content_box[i].j=0
     content_box[i].children[2].style.width=content_box[i].children[2].children.length*content_box[0].children[2].children[0].offsetWidth+'px'
  
 
    content_box[i].children[0].onclick=function(){
        if(this.parentNode.j>=this.nextSibling.nextSibling.nextSibling.nextSibling.children.length-1){
            return false
        } 
         for(var r=0;r<content_box[this.parentNode.q].children[2].children.length;r++){
                   this.parentNode.children[3].children[r].className='l'
            }
       this.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.children[this.parentNode.j+1].className='lu'
        var a=this.parentNode.j+=1
        this.style.cursor='pointer' 
        start(this.nextSibling.nextSibling.nextSibling.nextSibling,'left',a*-296)    
  }
  
   content_box[i].children[1].onclick=function(){

  

         if(this.parentNode.j==0){
           this.style.cursor='default' 
            return false
        } 
         for(var r=0;r<content_box[this.parentNode.q].children[2].children.length;r++){
                   this.parentNode.children[3].children[r].className='l'

            }
        this.nextSibling.nextSibling.nextSibling.nextSibling.children[this.parentNode.j-1].className='lu'
          t=this.parentNode.j-=1
        this.style.cursor='pointer'      
        start(this.nextSibling.nextSibling,'left',t*-296)    
    }
  }
}
