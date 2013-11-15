var total = 1000;
var totalLarge = 100000;
var raz = false;

//	Generate daddta 

DataGenUtils.generateData(ds.BasicReadLarge,totalLarge,raz);

DataGenUtils.generateData(ds.BasicCreate,total,raz);

DataGenUtils.genarateData(ds.BasicRemove,total,raz);

DateGenUtils.generateData(ds.BasicReadSmall,total,raz);

DateGenUtils.generateData(ds.BasicLink,total,raz);

DateGenUtils.generateData(ds.BasicUpdate,total,raz);

DateGenUtils.generateData(ds.BasicClass,total,raz);

DateGenUtils.generateData(ds.ComplexReadLarge,totalLarge,raz);

DateGenUtils.generateData(ds.ComplexReadSmall,total,raz);

DateGenUtils.generateData(ds.Indexes,totalLarge,raz);