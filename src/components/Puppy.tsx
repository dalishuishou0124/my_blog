import { useId } from 'react';

/** Original layered vector mascot. Every moving part is a separate SVG group. */
export default function Puppy({ happy, curious, kissing = false }: { happy: boolean; curious: boolean; kissing?: boolean }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 160 152" className={`puppy ${happy ? 'puppy-happy' : ''} ${curious ? 'puppy-curious' : ''} ${kissing ? 'puppy-kissing' : ''}`} role="img" aria-label={kissing ? '抱抱闭着笑眼，凑过来亲亲你' : happy ? '抱抱眯着笑眼，开心地摇尾巴' : '奶油色垂耳小狗抱抱'}>
      <defs>
        <linearGradient id={`${id}-fur`} x1="0" y1="0" x2="0.6" y2="1">
          <stop stopColor="#fffdf3"/><stop offset="0.65" stopColor="#fff0cf"/><stop offset="1" stopColor="#eecb8e"/>
        </linearGradient>
        <linearGradient id={`${id}-ear`} x1="0" y1="0" x2="0.8" y2="1">
          <stop stopColor="#ffe4a3"/><stop offset="1" stopColor="#d8a95c"/>
        </linearGradient>
        <radialGradient id={`${id}-cheek`}><stop stopColor="#f6a6a0" stopOpacity=".65"/><stop offset="1" stopColor="#f6a6a0" stopOpacity="0"/></radialGradient>
      </defs>
      <ellipse cx="82" cy="139" rx="49" ry="7" fill="#609abb" opacity=".17"/>
      <g className="puppy-body">
        <g className="puppy-tail"><path d="M115 108C140 103 130 78 139 77C150 77 153 119 120 122" fill={`url(#${id}-ear)`} stroke="#c99b57" strokeWidth="1.5"/><path d="M138 79Q142 84 141 91" fill="none" stroke="#fff1c9" strokeWidth="4" strokeLinecap="round"/></g>
        <ellipse cx="83" cy="110" rx="37" ry="29" fill={`url(#${id}-fur)`} stroke="#ddbe87" strokeWidth="1.3"/>
        <ellipse cx="84" cy="116" rx="22" ry="18" fill="#fff9e9"/>
        <g className="puppy-paws" fill={`url(#${id}-fur)`} stroke="#ddbe87" strokeWidth="1.3">
          <path d="M47 118Q41 136 52 139H64Q72 136 67 120Z"/>
          <path d="M97 120Q92 136 103 139H115Q124 136 117 118Z"/>
        </g>
        <path d="M54 132v4m7-4v4m43-4v4m7-4v4" stroke="#cca977" strokeWidth="1.4" strokeLinecap="round"/>
        <g className="puppy-head">
          <g className="puppy-ear puppy-ear-left"><path d="M49 37C27 29 14 55 20 78C23 90 35 91 42 77L58 46Z" fill={`url(#${id}-ear)`} stroke="#d6ad6e" strokeWidth="1.5"/><path d="M34 46Q25 61 29 76" fill="none" stroke="#fff1c7" strokeWidth="5" strokeLinecap="round" opacity=".7"/></g>
          <g className="puppy-ear puppy-ear-right"><path d="M111 37C133 29 146 55 140 78C137 90 125 91 118 77L102 46Z" fill={`url(#${id}-ear)`} stroke="#d6ad6e" strokeWidth="1.5"/><path d="M129 46Q138 62 133 76" fill="none" stroke="#f4cc84" strokeWidth="5" strokeLinecap="round"/></g>
          <path d="M38 62C38 32 57 19 80 21C104 19 123 34 123 62V76C121 102 103 111 80 109C54 111 37 99 37 78Z" fill={`url(#${id}-fur)`} stroke="#dfc293" strokeWidth="1.5"/>
          <path d="M69 28Q75 19 85 25M76 28Q86 18 91 27" fill="none" stroke="#fffdf7" strokeWidth="5" strokeLinecap="round"/>
          <ellipse cx="53" cy="83" rx="14" ry="11" fill={`url(#${id}-cheek)`}/><ellipse cx="109" cy="83" rx="14" ry="11" fill={`url(#${id}-cheek)`}/>
          <g className="puppy-open-eyes" fill="#483630">
            <g className="puppy-eye puppy-eye-left"><ellipse cx="60" cy="67" rx="7" ry="9"/><ellipse cx="58" cy="64" rx="2.2" ry="2.7" fill="white"/><circle cx="62" cy="70" r="1" fill="#c9a389"/></g>
            <g className="puppy-eye puppy-eye-right"><ellipse cx="102" cy="67" rx="7" ry="9"/><ellipse cx="100" cy="64" rx="2.2" ry="2.7" fill="white"/><circle cx="104" cy="70" r="1" fill="#c9a389"/></g>
          </g>
          <g className="puppy-smile-eyes" fill="none" stroke="#483630" strokeWidth="3.5" strokeLinecap="round"><path d="M53 69Q60 60 67 69"/><path d="M95 69Q102 60 109 69"/></g>
          <ellipse cx="81" cy="87" rx="22" ry="16" fill="#fff9ed"/>
          <path d="M75 80Q81 77 87 80Q88 85 81 87Q74 85 75 80" fill="#594037"/>
          <ellipse cx="79" cy="80" rx="2.5" ry="1" fill="#a88370"/>
          <path d="M81 87V90M81 90Q75 98 70 91M81 90Q87 98 92 91" fill="none" stroke="#715041" strokeWidth="2" strokeLinecap="round"/>
          <path className="puppy-tongue" d="M76 95Q81 99 86 95V100C86 107 76 107 76 100Z" fill="#f596a1" stroke="#d97987" strokeWidth="1"/>
        </g>
        <path d="M59 106Q81 115 105 106" fill="none" stroke="#73cbe3" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="83" cy="113" r="5.5" fill="#fbd37b" stroke="#d9aa50"/><path d="M83 110v5m-2-3h4" stroke="#fff7db" strokeWidth="1.3" strokeLinecap="round"/>
      </g>
    </svg>
  );
}
