import re
import os

# Change the current working directory to the parent directory
os.chdir('..')

# Read the HTML file
with open('Extention (Google - MS Edge)/urls.html', 'r') as file:
    content = file.read()

# Find all href values using regular expressions
all_urls = re.findall(r'href="(.*?)"', content)

# Filter URLs that start with "https"
urls = [url for url in all_urls if url.startswith("https")]

# Print the URLs in the specified format
for url in urls:
    print(f'"{url}",')
