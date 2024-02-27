const counter = document.getElementById('Counter')
counter.style.fontSize="25px"
var init=false
document.addEventListener('keypress', event => {
  if (event.code === 'Space') {
clickAdd()
} else if (event.code === 'Digit1') {
cpcAdd()
} else if (event.code === 'Digit2') {
Rebirth()
} else if (event.code === 'Digit3') {
superRebirth()
}else if (event.code === 'Digit4'){
if (h.equalsTo(1)){
h= new OmegaNum(10)
}else if (h.equalsTo(10)){
h= new OmegaNum(25)
}else if (h.equalsTo(25)){
h= new OmegaNum(100)
}else if (h.equalsTo(100)){
f=!f
h=new OmegaNum(0)
}else if (h.equalsTo(0)){
h= new OmegaNum(1)
f=!f
}
} else if (event.code === 'Digit5') {
ultraRebirth()
}
})
function clickAdd(){
a=a.add(n)
}
function cpcAdd(){
if (f==true) {
if ( a.greaterThanOrEqualTo(d) ) {
	a=a.sub(d)
	b=b.add(g)
}
}else if (f==false){
if ( a.greaterThanOrEqualTo(e) ) {
	a=a.sub(e)
	b=b.add(1)
}
}	
	t=b
}
function updateCont(){
var zero = OmegaNum(0),one = OmegaNum(1),two = OmegaNum(2),three = OmegaNum(3),four = OmegaNum(4),five = OmegaNum(5),six = OmegaNum(6),seven = OmegaNum(7)
if (init===false){
h=one
s=zero
p=zero
j=zero
l=zero
a=zero
t=one
init=true
f=false
save=atob(localStorage.getItem("save"));
}else{
r=five.pow(s)
o=four.pow(p)
m=three.pow(l)
c=two.pow(j)
b=one.mul(t)
n=(((b.mul(c)).mul(m)).mul(o)).mul(r)
g=OmegaNum.affordArithmeticSeries(a,10,5,b.sub(1))
d=OmegaNum.sumArithmeticSeries(g,10,5,b.sub(1))
e=OmegaNum.sumArithmeticSeries(h,10,5,b.sub(1))
i=OmegaNum.sumGeometricSeries(1,50,5,j).floor()
k=OmegaNum.sumGeometricSeries(1,5,1.5,l).floor()
q=OmegaNum.sumGeometricSeries(1,4,2,p).floor()
if (f==true){
counter.innerText=a+"\n buy max "+f+"\n cpc = "+n+'('+b+"*"+c+"*"+m+'*'+o+"*"+r+")\n cost = "+d+" to buy "+g+" cpc\n rebirth cost "+i+"\n"+i.sub(a)+" more needed\n"+" super rebirth costs "+k+" rebirths currently\n need "+k.sub(j)+" more"
}else{
counter.innerText=a+"\n buy max "+f+"\n cpc = "+n+'('+b+"*"+c+"*"+m+'*'+o+"*"+r+")\n cost = "+e+" to buy "+h+" cpc \n rebirth cost "+i+"\n"+i.sub(a)+" more needed to rebirth\n"+" super rebirth costs "+k+" rebirths currently\n need "+k.sub(j)+" more\n ultra rebirth costs "+q+" super rebirths \n need "+q.sub(l)+" more"
}
save = btoa(JSON.stringify({
a1: {value:a},
a2: {value:b},
a3: {value:c},
a4: {value:d},
a5: {value:e},
a6: {value:f},
a7: {value:g},
a8: {value:h},
a9: {value:i},
b1: {value:j},
b2: {value:k},
b3: {value:l},
b4: {value:m},
b5: {value:n},
b6: {value:o},
b7: {value:p},
b8: {value:q},
b9: {value:r},
c1: {value:s},
c2: {value:t}
}));
}
localStorage.setItem("save", save);
}
function Rebirth(){
if (a.greaterThanOrEqualTo(i)){
a=a.sub(a)
b=b.sub(b).add(1)
t=OmegaNum(1)
c=c.mul(2)
j=j.add(1)
}
}
function superRebirth(){
if (j.greaterThanOrEqualTo(k)){
a=a.sub(a)
b=b.sub(b).add(1)
c=c.sub(c).add(1)
j=j.sub(j)
l=l.add(1)
m=m.mul(3)
}
}
function ultraRebirth(){
if (l.greaterThanOrEqualTo(q)){
a=a.sub(a)
b=b.sub(b).add(1)
c=c.sub(c).add(1)
j=j.sub(j)
l=l.sub(l)
m=m.sub(m).add(1)
p=p.add(1)
o=o.mul(4)
}
}
function SuperUltraRebirth(){
if (p.greaterThanOrEqualTo(u)){
a=a.sub(a)
b=b.sub(b).add(1)
c=c.sub(c).add(1)
j=j.sub(j)
l=l.sub(l)
m=m.sub(m).add(1)
p=p.add(1)
o=o.mul(4)
}
}
setInterval('updateCont()',25)
