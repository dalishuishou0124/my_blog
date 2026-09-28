from html.parser import HTMLParser
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import urllib.request,json
base=Path(__file__).resolve().parents[1]
reference=base.parent/'design-reference/stitch_personal_journal_sketch'
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.images=[]
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=='img' and a.get('src','').startswith('https://'): self.images.append(a)
manifest=[]
for folder,prefix in [('draft_3_2','home'),('draft_3_3','story'),('draft_3_4','album'),('draft_3_5','journal')]:
 p=Parser();p.feed((reference/folder/'code.html').read_text())
 for i,a in enumerate(p.images):
  manifest.append({'file':f'{prefix}-{i+1}.jpg','url':a['src'],'description':a.get('alt',a.get('data-alt','')),'source':folder})
(base/'scripts/asset-sources.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
def download(x):
 out=base/'public/images'/x['file']
 if not out.exists():
  with urllib.request.urlopen(x['url'],timeout=40) as r:out.write_bytes(r.read())
 return x['file']
with ThreadPoolExecutor(max_workers=6) as pool:
 for result in pool.map(download,manifest):print(result)
