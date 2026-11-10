import re

with open('frontend/src/lib/site-config.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Find BLOG_POSTS block
start = text.find('BLOG_POSTS')
print('BLOG_POSTS block exists:', start != -1)
if start != -1:
    print(text[start:start+2500])
