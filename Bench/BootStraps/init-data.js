var total = 1000;
var totalLarge = 10000;
var raz = false;

//	Generate daddta 

DataGenUtils.generateData(ds.BasicReadLarge,totalLarge,raz);

DataGenUtils.generateData(ds.BasicCreate,total,raz);

DataGenUtils.generateData(ds.BasicRemove,total,raz);

DataGenUtils.generateData(ds.BasicReadSmall,total,raz);

DataGenUtils.generateData(ds.BasicLink,total,raz);

DataGenUtils.generateData(ds.BasicUpdate,total,raz);

DataGenUtils.generateData(ds.BasicClass,total,raz);

DataGenUtils.generateData(ds.ComplexReadLarge,totalLarge,raz);

DataGenUtils.generateData(ds.ComplexReadSmall,total,raz);

DataGenUtils.generateData(ds.Indexes,totalLarge,raz);