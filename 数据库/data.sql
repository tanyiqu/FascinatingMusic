-- 创建数据库
-- create database MYBFQ;
-- use MYBFQ;

-- 创建表
-- 1.曲库表
/*
create table Yy(
	yy_id char(7) primary key,
    yy_zz nvarchar(50) not null,
    yy_mz nvarchar(50) not null,
    yy_ydz varchar(128) not null,
    yy_fmdz varchar(128) not null,
    yy_dzs int default 0
);
*/

-- 查看
select * from Yy;
select * from Yy where yy_mz like '%萤%';

-- 清空
-- truncate table Yy;

-- 插入数据
insert into Yy values('0000001', '闫东炜', '萤火虫之愿(完整版)', 'http://localhost:8080/resource/music/萤火虫之愿(完整版).mp3', 'http://localhost:8080/resource/music/萤火虫之愿(完整版).jpg', 0);
insert into Yy values('0000002', '闫东炜', '萤火虫の怨', 'http://localhost:8080/resource/music/萤火虫の怨.mp3', 'http://localhost:8080/resource/music/萤火虫の怨.jpg', 0);



