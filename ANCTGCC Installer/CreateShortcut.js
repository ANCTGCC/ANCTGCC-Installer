Shell = new ActiveXObject("WScript.Shell");

Datas = Session.Property("CustomActionData").split('|');
SpecialFolderName = Datas[0];
InstalledPath = Datas[1];
ExeBaseName = Datas[2];
ExeFileName = ExeBaseName + ".exe";

LinkDir = Shell.SpecialFolders(SpecialFolderName) + "\\";
LinkPath = LinkDir + ExeBaseName + ".lnk";

link = Shell.CreateShortcut(LinkPath);
link.IconLocation = InstalledPath + ExeFileName + ",0";
link.TargetPath = InstalledPath + ExeFileName;
link.WorkingDirectory = InstalledPath;
link.Save();
