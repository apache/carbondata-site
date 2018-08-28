mvn compile

mvn exec:java -Dexec.mainClass=WebsiteLauncher

# mvn pdf:pdf

mvn install

# mvn exec:java -Dexec.mainClass=CleanUp

find . -type f -name "*.html" ! -name "header.html" ! -name "footer.html" -exec sed -i '' 's/&lt;script&gt;/<script>/g' {} +
find . -type f -name "*.html" ! -name "header.html" ! -name "footer.html" -exec sed -i '' 's/&lt;\/script&gt;/<\/script>/g' {} +
