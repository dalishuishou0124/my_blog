import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowLeft, ArrowRight, Camera } from 'lucide-react';
import type { Photo } from '../content/data';
export function Modal({ children, onClose, label, dark=false }: {children:ReactNode;onClose:()=>void;label:string;dark?:boolean}) {
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const previous=document.activeElement as HTMLElement|null;
  const root=document.getElementById('site-shell');
  const overflow=document.body.style.overflow;
  document.body.style.overflow='hidden';
  if(root)root.inert=true;
  const focus=()=>ref.current?.querySelector<HTMLElement>('button:not(:disabled),a[href],[tabindex="0"]')?.focus();
  focus();
  const handle=(e:KeyboardEvent)=>{
   if(e.key==='Escape'){e.preventDefault();onClose();}
   if(e.key==='Tab'){
    const items=Array.from(ref.current?.querySelectorAll<HTMLElement>('button:not(:disabled),a[href],[tabindex="0"]')??[]);
    const first=items[0],last=items.at(-1);
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}
   }
  };
  document.addEventListener('keydown',handle);
  return()=>{document.removeEventListener('keydown',handle);document.body.style.overflow=overflow;if(root)root.inert=false;previous?.focus({preventScroll:true});};
 },[onClose]);
 return createPortal(<div className={`modal-overlay ${dark?'modal-dark':''}`} onClick={e=>{if(e.target===e.currentTarget)onClose();}}><div ref={ref} role="dialog" aria-modal="true" aria-label={label} className={dark?'lightbox-dialog':'note-dialog'}>{children}</div></div>,document.body);
}
export function Lightbox({items,index,setIndex,onClose}:{items:Photo[];index:number;setIndex:(i:number)=>void;onClose:()=>void}){
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==='ArrowLeft'){e.preventDefault();setIndex(Math.max(0,index-1));}if(e.key==='ArrowRight'){e.preventDefault();setIndex(Math.min(items.length-1,index+1));}};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key);},[index,items.length,setIndex]);
 const photo=items[index];
 return <Modal label="照片大图" dark onClose={onClose}><div className="flex items-center justify-between gap-3"><span className="rounded-full bg-white px-4 py-2 font-semibold text-ink" aria-live="polite">{index+1} / {items.length}</span><span className="text-sm text-white/80">← → 切换 · Esc 关闭</span><button className="icon-button" onClick={onClose} aria-label="关闭大图"><X/></button></div><div className="lightbox-image-row"><button className="icon-button" disabled={index===0} onClick={()=>setIndex(index-1)} aria-label="上一张"><ArrowLeft/></button><img src={photo.src} alt={photo.title} className="lightbox-image"/><button className="icon-button" disabled={index===items.length-1} onClick={()=>setIndex(index+1)} aria-label="下一张"><ArrowRight/></button></div><p className="mx-auto flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-ink"><Camera size={18}/>{photo.title}<span className="text-slate-500">· 示例图片</span></p></Modal>;
}
