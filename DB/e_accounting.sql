--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: barang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.barang (
    id_barang character varying NOT NULL,
    nama_barang character varying NOT NULL,
    harga_beli integer NOT NULL,
    harga_jual integer NOT NULL,
    jumlah_barang integer NOT NULL
);


ALTER TABLE public.barang OWNER TO postgres;

--
-- Name: penjualan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.penjualan (
    id_penjualan integer NOT NULL,
    id_barang character varying NOT NULL,
    jumlah_terjual integer NOT NULL,
    harga_total integer NOT NULL,
    tanggal_penjualan date
);


ALTER TABLE public.penjualan OWNER TO postgres;

--
-- Name: penjualan_id_penjualan_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.penjualan_id_penjualan_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.penjualan_id_penjualan_seq OWNER TO postgres;

--
-- Name: penjualan_id_penjualan_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.penjualan_id_penjualan_seq OWNED BY public.penjualan.id_penjualan;


--
-- Name: penjualan id_penjualan; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.penjualan ALTER COLUMN id_penjualan SET DEFAULT nextval('public.penjualan_id_penjualan_seq'::regclass);


--
-- Data for Name: barang; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.barang (id_barang, nama_barang, harga_beli, harga_jual, jumlah_barang) FROM stdin;
BJ-A-01	Baju Anak Gambar Sapidermen	30000	35000	10
BJ-A-00	Baju Anak Gambar Princes	37000	40000	10
BJ-D-00	Baju Polo Warna Putih	40000	45000	9
\.


--
-- Data for Name: penjualan; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.penjualan (id_penjualan, id_barang, jumlah_terjual, harga_total, tanggal_penjualan) FROM stdin;
1	BJ-A-01	3	105000	2019-03-22
2	BJ-A-01	4	140000	2019-03-22
3	BJ-A-00	4	160000	2019-03-25
4	BJ-D-00	1	45000	2019-03-11
\.


--
-- Name: penjualan_id_penjualan_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.penjualan_id_penjualan_seq', 7, true);


--
-- Name: barang barang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barang
    ADD CONSTRAINT barang_pkey PRIMARY KEY (id_barang);


--
-- Name: penjualan penjualan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.penjualan
    ADD CONSTRAINT penjualan_pkey PRIMARY KEY (id_penjualan);


--
-- Name: penjualan penjualan_id_barang_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.penjualan
    ADD CONSTRAINT penjualan_id_barang_fkey FOREIGN KEY (id_barang) REFERENCES public.barang(id_barang);


--
-- PostgreSQL database dump complete
--

