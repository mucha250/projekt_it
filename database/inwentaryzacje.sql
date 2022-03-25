create table pracownicy(
id number(2) constraint id_pracownika_pk primary key,
login varchar2(25 char) not null unique,
haslo varchar2(30 char) not null,
imie varchar2(25 char) not null,
nazwisko varchar2(30 char) not null,
nr_telefonu number(11) not null unique,
stanowisko varchar2(15 char) not null,
region varchar2(50 char) not null
);

create table producent(
id number(2) constraint id_producenta_pk primary key,
nazwa varchar2(20 char) not null
);

create table kategoria(
id number(2) constraint id_kategoria_pk primary key,
nazwa varchar2(20 char) not null,
id_producenta number(2) constraint id_producenta_fk references producent(id)
);


create table sprzet(
id number(2) constraint id_sprzetu_pk primary key,
model varchar2(40 char) not null,
nr_seryjny varchar2(15 char) not null,
stan_sprzetu varchar2(200 char),
id_pracownicy number(2) constraint id_pracownika_fk references pracownicy(id),
id_kategoria number(2) constraint id_kategoria_fk references kategoria(id)
);

create table laptopy(
id number(2) constraint id_laptop_pk primary key,
nazwa_w_domenie varchar2(15 char) not null unique,
typ_ram varchar2(5 char) not null,
rozmiar_ram varchar2(4 char) not null,
typ_dysku varchar2(4 char) not null,
rozmiar_dysku varchar2(10 char) not null,
naped varchar2(4 char) not null,
ethernet varchar2(4 char) not null,
rozmiar varchar2(10 char) not null,
ilosc_usb number(2) not null,
id_sprzet number(2) constraint id_sprzet_fk references sprzet(id)
);

create table telefony(
id number(2) constraint id_telefon_pk primary key,
imei number(16) not null unique,
rozmiar_ram varchar2(4 char) not null,
pamiec_wewnetrzna varchar2(10 char) not null,
rozmiar varchar2(10 char) not null,
rozmiar_mpx_tyl number(2) not null,
id_sprzet number(2) constraint id_sprzet_telefony_fk references sprzet(id)
);

create table procesory(
id number(2) constraint id_procesor_pk primary key,
nazwa varchar2(30 char) not null,
generacja varchar2(30 char) not null,
model varchar2(30 char) not null,
czestotliwosc varchar2(10 char) not null,
liczba_rdzeni number(2) not null,
id_laptopy number(2) constraint id_laptop_fk references laptopy(id),
id_telefony number(2) constraint id_telefon_fk references telefony(id)
);

create table monitory(
id number(2) constraint id_monitor_pk primary key,
rozmiar varchar2(10 char) not null,
rodzielczosc varchar2(12 char) not null,
zlacza varchar2(30 char) not null,
typ_matrycy varchar2(30 char) not null,
id_sprzet number(2) constraint id_sprzet_monitory_fk references sprzet(id)
);

create table aparaty(
id number(2) constraint id_aparat_pk primary key,
typ varchar2(20 char) not null,
obiektyw varchar2(20 char) not null,
pamiec varchar2(10 char) not null,
id_sprzet number(2) constraint id_sprzet_aparaty_fk references sprzet(id)
);

create table modemy(
id number(2) constraint id_modem_pk primary key,
typ_modemu varchar2(20 char) not null,
imei number(16) not null unique,
login varchar2(25 char) not null,
haslo varchar2(30 char) not null,
id_sprzet number(2) constraint id_sprzet_modemy_fk references sprzet(id)
);

create table peryferia(
id number(2) constraint id_peryferia_pk primary key,
typ_peryferii varchar2(30 char) not null,
nazwa varchar2(30 char) not null,
id_sprzet number(2) constraint id_sprzet_peryferia_fk references sprzet(id)
);

create table licencje(
id number(2) constraint id_licencja_pk primary key,
nazwa varchar2(30 char) not null,
klucz_produktu varchar2(50 char) not null,
id_sprzet number(2) constraint id_sprzet_licencje_fk references sprzet(id)
);

create table drukarki(
id number(2) constraint id_drukarki_pk primary key,
nazwa varchar2(30 char) not null,
typ varchar2(20 char) not null,
imei number(16) not null unique,
mac varchar2(14 char) not null unique,
ip varchar2(20 char) not null,
login varchar2(25 char) not null,
haslo varchar2(30 char) not null,
id_sprzet number(2) constraint id_sprzet_drukarki_fk references sprzet(id)
);


create table tonery(
id number(2) constraint id_toner_pk primary key,
typ varchar2(20 char) not null,
kolor varchar2(20 char) not null,
nazwa varchar2(20 char) not null,
id_drukarki number(2) constraint id_drukarki_fk references drukarki(id)
);


