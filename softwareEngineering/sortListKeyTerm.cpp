#include <bits/stdc++.h>

using namespace std;

bool condition(string str1, string str2){
	for_each(str1.begin(), str1.end(), [](char & c) {
        	c = toupper(c);
	});
	for_each(str2.begin(), str2.end(), [](char & c) {
        	c = toupper(c);
	});
	return str1 < str2;
}

int main(){
	string line  = "ndqk";
	string chapter;
	vector<string> list;
	ifstream inputFile("Key_Terms_2.txt");
	ofstream outputFile("Key_Terms_Sorted.txt");
	int i = 1;
	while(getline(inputFile, line)){
		if(line[0] == '*'){
			chapter = line;
		}
		else{
			if(line[line.size() - 1] >= 48 && line[line.size() - 1] <= 57 ) 				list.push_back(line + " [" + chapter + "]");
			
		}
		i++;
	}
	sort(list.begin(), list.end(), condition);
	for(int i = 0; i < list.size(); i++)
		outputFile << list.at(i) << endl;
	inputFile.close();
	outputFile.close();
	
	return 0;
}

