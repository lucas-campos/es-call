create schema escall;

create table escall.support_technician (
    id int primary key not null,
    name varchar (100) not null unique
);

create table escall.call (
    id int primary key not null,
    support_technician_id int not null,
    name varchar (100) not null,
    phone_number varchar (100) not null,
    description varchar (200) not null,
    status varchar (100) not null,
    created_at timestamp not null,
    technician_added_date timestamp not null,
    finished_at timestamp not null,
    priority varchar (100) not null,
    constraint call_support_technician_fk foreign key (support_technician_id) references escall.support_technician(id)    
);

