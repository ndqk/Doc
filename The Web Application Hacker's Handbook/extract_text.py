# importing required modules
import sys, PyPDF2

# creating a pdf file object
pdfFileObj = open(str(sys.argv[1]), 'rb')

# creating a pdf reader object
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

# printing number of pages in pdf file
print(pdfReader.numPages)

output = open(str(sys.argv[1]).split('.pdf')[0] + ".txt", "a")

for i in range(pdfReader.numPages):
    # creating a page object
    pageObj = pdfReader.getPage(i)
    output.write(pageObj.extractText())

output.close()
# closing the pdf file object
pdfFileObj.close()
