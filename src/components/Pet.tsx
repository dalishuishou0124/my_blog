import { useEffect, useRef, useState } from 'react';
import { Camera, Heart, HeartHandshake, PawPrint, X, Minimize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Puppy from './Puppy';
export default function Pet({hidden,greeting}:{hidden:boolean;greeting:number}){
 const [menu,setMenu]=useState(false),[minimized,setMinimized]=useState(false),[affection,setAffection]=useState<'pat'|'kiss'|null>(null);
 const wrapper=useRef<HTMLElement>(null),dog=useRef<HTMLButtonElement>(null),timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const navigate=useNavigate();
 useEffect(()=>{if(greeting){setMinimized(false);setMenu(true);dog.current?.focus();}},[greeting]);
 useEffect(()=>{if(!menu)return;const outside=(e:PointerEvent)=>{if(!wrapper.current?.contains(e.target as Node))setMenu(false);};const escape=(e:KeyboardEvent)=>{if(e.key==='Escape'){setMenu(false);dog.current?.focus();}};document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};},[menu]);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
 const happy=affection!==null;
 const interact=(kind:'pat'|'kiss')=>{setAffection(kind);if(timer.current)clearTimeout(timer.current);timer.current=setTimeout(()=>setAffection(null),kind==='kiss'?3000:2000);};
 return <aside ref={wrapper} aria-label="网页宠物抱抱" className="pet-dock" hidden={hidden}>
 {minimized?<button className="pet-paw" aria-label="召唤抱抱" onClick={()=>{setMinimized(false);setMenu(false);}}><PawPrint size={23}/><span>抱抱</span></button>:<>
 {menu&&<div className="pet-menu" id="pet-menu"><button className="absolute right-3 top-3 rounded-full p-1 hover:bg-sky-soft" aria-label="关闭宠物气泡" onClick={()=>{setMenu(false);dog.current?.focus();}}><X size={16}/></button><span className="eyebrow">BAOBAO · 小狗抱抱</span><p className="mb-4 mt-2 pr-4 text-sm leading-6" aria-live="polite">{affection==='kiss'?'啵～给你一个大大的抱抱！':happy?'好舒服～今天也要开心呀！':'汪！欢迎来坐坐，想和我一起逛逛吗？'}</p><div className="flex flex-col gap-2"><button className="pet-action bg-blush" onClick={()=>interact('pat')}><Heart size={16}/>摸摸我</button><button className="pet-action bg-lavender" onClick={()=>interact('kiss')}><HeartHandshake size={16}/>亲亲抱抱</button><button className="pet-action bg-sky-soft" onClick={()=>{setMenu(false);navigate('/album');}}><Camera size={16}/>去看照片</button><button className="pet-action bg-lavender" onClick={()=>{setMenu(false);setMinimized(true);}}><Minimize2 size={16}/>收起</button></div></div>}
 <button ref={dog} className={`dog-button ${happy?'dog-happy':''}`} aria-label="与抱抱互动" aria-expanded={menu} aria-controls="pet-menu" onClick={()=>setMenu(v=>!v)}>
 {happy&&<span className="pet-hearts" aria-hidden="true">{affection==='kiss'?'♥ 啵～ ♥':'♥ ♥ ♥'}</span>}
 <Puppy happy={happy} curious={menu} kissing={affection==='kiss'}/><span className="dog-name"><PawPrint size={13}/> 抱抱</span></button></>}
 </aside>;
}
