CREATE TYPE status AS ENUM ('A', 'D', 'P');

create table m_organizations_1 (
	id serial primary key not null,
	uuid varchar(36) unique not null,
	name varchar(100) not null,
	sname varchar(10) not null,
	created_by integer not null,
	updated_by integer not null,
	created_at timestamp not null,
	updated_at timestamp not null,
	status status not null
);

create table m_organizations_2 (
	id serial primary key not null,
	uuid varchar(36) unique not null,
	org_1_id integer not null,
	name varchar(100) not null,
	sname varchar(10) not null,
	created_by integer not null,
	updated_by integer not null,
	created_at timestamp not null,
	updated_at timestamp not null,
	status status not null
);


create table m_organizations_3 (
	id serial primary key not null,
	uuid varchar(36) unique not null,
	org_2_id integer not null,
	name varchar(100) not null,
	sname varchar(10) not null,
	created_by integer not null,
	updated_by integer not null,
	created_at timestamp not null,
	updated_at timestamp not null,
	status status not null
);
