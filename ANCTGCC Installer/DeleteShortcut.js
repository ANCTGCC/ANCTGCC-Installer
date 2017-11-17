Shell = new ActiveXObject("WScript.Shell");
FSO = new ActiveXObject("Scripting.FileSystemObject");

Datas = Session.Property("CustomActionData").split('|');
SpecialFolderName = Datas[0];
ExeBaseName = Datas[1];

LinkDir = Shell.SpecialFolders(SpecialFolderName) + "\\";
LinkPath = LinkDir + ExeBaseName + ".lnk";

if(FSO.FileExists(LinkPath)){
    FSO.DeleteFile(LinkPath);
}
