toc.dat                                                                                             0000600 0004000 0002000 00000065270 14372717504 0014463 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP       3    /    	            {            remax    13.2    14.6 (Homebrew) a    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    17480    remax    DATABASE     Y   CREATE DATABASE remax WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE remax;
                postgres    false                     3079    16927    timescaledb 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS timescaledb WITH SCHEMA public;
    DROP EXTENSION timescaledb;
                   false         �           0    0    EXTENSION timescaledb    COMMENT     i   COMMENT ON EXTENSION timescaledb IS 'Enables scalable inserts and complex queries for time-series data';
                        false    2         �            1259    28447    banks    TABLE     �   CREATE TABLE public.banks (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    img_url text,
    slug text
);
    DROP TABLE public.banks;
       public         heap    postgres    false         �            1259    28445    banks_id_seq    SEQUENCE     �   CREATE SEQUENCE public.banks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.banks_id_seq;
       public          postgres    false    248         �           0    0    banks_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.banks_id_seq OWNED BY public.banks.id;
          public          postgres    false    247         �            1259    28486 	   card_user    TABLE     e   CREATE TABLE public.card_user (
    id integer NOT NULL,
    card_id integer,
    user_id integer
);
    DROP TABLE public.card_user;
       public         heap    postgres    false         �            1259    28484    card_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.card_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.card_user_id_seq;
       public          postgres    false    254         �           0    0    card_user_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.card_user_id_seq OWNED BY public.card_user.id;
          public          postgres    false    253         �            1259    28458    cards    TABLE       CREATE TABLE public.cards (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    interest_rate double precision,
    annual_fee double precision,
    img_url text,
    slug text,
    featured boolean DEFAULT false,
    bank_id integer,
    link text
);
    DROP TABLE public.cards;
       public         heap    postgres    false         �            1259    28456    cards_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.cards_id_seq;
       public          postgres    false    250         �           0    0    cards_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.cards_id_seq OWNED BY public.cards.id;
          public          postgres    false    249                     1259    28504 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    img_url text,
    icon text,
    slug text,
    featured boolean DEFAULT false
);
    DROP TABLE public.categories;
       public         heap    postgres    false         �            1259    28502    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    256         �           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    255                    1259    28551    listings    TABLE     �   CREATE TABLE public.listings (
    id integer NOT NULL,
    reward_rate double precision NOT NULL,
    vendor integer,
    card_id integer
);
    DROP TABLE public.listings;
       public         heap    postgres    false                    1259    28549    listings_id_seq    SEQUENCE     �   CREATE SEQUENCE public.listings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.listings_id_seq;
       public          postgres    false    262         �           0    0    listings_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.listings_id_seq OWNED BY public.listings.id;
          public          postgres    false    261                    1259    28516    rewards    TABLE     �   CREATE TABLE public.rewards (
    id integer NOT NULL,
    reward_rate double precision NOT NULL,
    card_id integer,
    category_id integer
);
    DROP TABLE public.rewards;
       public         heap    postgres    false                    1259    28514    rewards_id_seq    SEQUENCE     �   CREATE SEQUENCE public.rewards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.rewards_id_seq;
       public          postgres    false    258         �           0    0    rewards_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.rewards_id_seq OWNED BY public.rewards.id;
          public          postgres    false    257         �            1259    28475    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false         �            1259    28473    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    252         �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    251                    1259    28534    vendors    TABLE     �   CREATE TABLE public.vendors (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    featured boolean DEFAULT false,
    category_id integer,
    img_url text,
    slug text,
    relative_link text,
    link text
);
    DROP TABLE public.vendors;
       public         heap    postgres    false                    1259    28532    vendors_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vendors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.vendors_id_seq;
       public          postgres    false    260         �           0    0    vendors_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.vendors_id_seq OWNED BY public.vendors.id;
          public          postgres    false    259         �           2604    28450    banks id    DEFAULT     d   ALTER TABLE ONLY public.banks ALTER COLUMN id SET DEFAULT nextval('public.banks_id_seq'::regclass);
 7   ALTER TABLE public.banks ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    248    247    248         �           2604    28489    card_user id    DEFAULT     l   ALTER TABLE ONLY public.card_user ALTER COLUMN id SET DEFAULT nextval('public.card_user_id_seq'::regclass);
 ;   ALTER TABLE public.card_user ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    254    253    254         �           2604    28461    cards id    DEFAULT     d   ALTER TABLE ONLY public.cards ALTER COLUMN id SET DEFAULT nextval('public.cards_id_seq'::regclass);
 7   ALTER TABLE public.cards ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    249    250    250         �           2604    28507    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    255    256    256         �           2604    28554    listings id    DEFAULT     j   ALTER TABLE ONLY public.listings ALTER COLUMN id SET DEFAULT nextval('public.listings_id_seq'::regclass);
 :   ALTER TABLE public.listings ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    262    261    262         �           2604    28519 
   rewards id    DEFAULT     h   ALTER TABLE ONLY public.rewards ALTER COLUMN id SET DEFAULT nextval('public.rewards_id_seq'::regclass);
 9   ALTER TABLE public.rewards ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    258    257    258         �           2604    28478    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    252    251    252         �           2604    28537 
   vendors id    DEFAULT     h   ALTER TABLE ONLY public.vendors ALTER COLUMN id SET DEFAULT nextval('public.vendors_id_seq'::regclass);
 9   ALTER TABLE public.vendors ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    260    259    260         �          0    17376    cache_inval_bgw_job 
   TABLE DATA           9   COPY _timescaledb_cache.cache_inval_bgw_job  FROM stdin;
    _timescaledb_cache          postgres    false    237       3262.dat �          0    17379    cache_inval_extension 
   TABLE DATA           ;   COPY _timescaledb_cache.cache_inval_extension  FROM stdin;
    _timescaledb_cache          postgres    false    238       3261.dat �          0    17373    cache_inval_hypertable 
   TABLE DATA           <   COPY _timescaledb_cache.cache_inval_hypertable  FROM stdin;
    _timescaledb_cache          postgres    false    236       3260.dat �          0    16944 
   hypertable 
   TABLE DATA             COPY _timescaledb_catalog.hypertable (id, schema_name, table_name, associated_schema_name, associated_table_prefix, num_dimensions, chunk_sizing_func_schema, chunk_sizing_func_name, chunk_target_size, compression_state, compressed_hypertable_id, replication_factor) FROM stdin;
    _timescaledb_catalog          postgres    false    207       3237.dat �          0    17030    chunk 
   TABLE DATA           w   COPY _timescaledb_catalog.chunk (id, hypertable_id, schema_name, table_name, compressed_chunk_id, dropped) FROM stdin;
    _timescaledb_catalog          postgres    false    216       3244.dat �          0    16995 	   dimension 
   TABLE DATA           �   COPY _timescaledb_catalog.dimension (id, hypertable_id, column_name, column_type, aligned, num_slices, partitioning_func_schema, partitioning_func, interval_length, integer_now_func_schema, integer_now_func) FROM stdin;
    _timescaledb_catalog          postgres    false    212       3240.dat �          0    17014    dimension_slice 
   TABLE DATA           a   COPY _timescaledb_catalog.dimension_slice (id, dimension_id, range_start, range_end) FROM stdin;
    _timescaledb_catalog          postgres    false    214       3242.dat �          0    17051    chunk_constraint 
   TABLE DATA           �   COPY _timescaledb_catalog.chunk_constraint (chunk_id, dimension_slice_id, constraint_name, hypertable_constraint_name) FROM stdin;
    _timescaledb_catalog          postgres    false    217       3246.dat �          0    17085    chunk_data_node 
   TABLE DATA           [   COPY _timescaledb_catalog.chunk_data_node (chunk_id, node_chunk_id, node_name) FROM stdin;
    _timescaledb_catalog          postgres    false    220       3249.dat �          0    17069    chunk_index 
   TABLE DATA           o   COPY _timescaledb_catalog.chunk_index (chunk_id, index_name, hypertable_id, hypertable_index_name) FROM stdin;
    _timescaledb_catalog          postgres    false    219       3248.dat �          0    17221    compression_chunk_size 
   TABLE DATA             COPY _timescaledb_catalog.compression_chunk_size (chunk_id, compressed_chunk_id, uncompressed_heap_size, uncompressed_toast_size, uncompressed_index_size, compressed_heap_size, compressed_toast_size, compressed_index_size, numrows_pre_compression, numrows_post_compression) FROM stdin;
    _timescaledb_catalog          postgres    false    232       3258.dat �          0    17150    continuous_agg 
   TABLE DATA           �   COPY _timescaledb_catalog.continuous_agg (mat_hypertable_id, raw_hypertable_id, user_view_schema, user_view_name, partial_view_schema, partial_view_name, bucket_width, direct_view_schema, direct_view_name, materialized_only) FROM stdin;
    _timescaledb_catalog          postgres    false    226       3253.dat �          0    17181 +   continuous_aggs_hypertable_invalidation_log 
   TABLE DATA           �   COPY _timescaledb_catalog.continuous_aggs_hypertable_invalidation_log (hypertable_id, lowest_modified_value, greatest_modified_value) FROM stdin;
    _timescaledb_catalog          postgres    false    228       3255.dat �          0    17171 &   continuous_aggs_invalidation_threshold 
   TABLE DATA           h   COPY _timescaledb_catalog.continuous_aggs_invalidation_threshold (hypertable_id, watermark) FROM stdin;
    _timescaledb_catalog          postgres    false    227       3254.dat �          0    17185 0   continuous_aggs_materialization_invalidation_log 
   TABLE DATA           �   COPY _timescaledb_catalog.continuous_aggs_materialization_invalidation_log (materialization_id, lowest_modified_value, greatest_modified_value) FROM stdin;
    _timescaledb_catalog          postgres    false    229       3256.dat �          0    17202    hypertable_compression 
   TABLE DATA           �   COPY _timescaledb_catalog.hypertable_compression (hypertable_id, attname, compression_algorithm_id, segmentby_column_index, orderby_column_index, orderby_asc, orderby_nullsfirst) FROM stdin;
    _timescaledb_catalog          postgres    false    231       3257.dat �          0    16966    hypertable_data_node 
   TABLE DATA           x   COPY _timescaledb_catalog.hypertable_data_node (hypertable_id, node_hypertable_id, node_name, block_chunks) FROM stdin;
    _timescaledb_catalog          postgres    false    208       3238.dat �          0    17142    metadata 
   TABLE DATA           R   COPY _timescaledb_catalog.metadata (key, value, include_in_telemetry) FROM stdin;
    _timescaledb_catalog          postgres    false    225       3252.dat �          0    17236 
   remote_txn 
   TABLE DATA           Y   COPY _timescaledb_catalog.remote_txn (data_node_name, remote_transaction_id) FROM stdin;
    _timescaledb_catalog          postgres    false    233       3259.dat �          0    16980 
   tablespace 
   TABLE DATA           V   COPY _timescaledb_catalog.tablespace (id, hypertable_id, tablespace_name) FROM stdin;
    _timescaledb_catalog          postgres    false    210       3239.dat �          0    17099    bgw_job 
   TABLE DATA           �   COPY _timescaledb_config.bgw_job (id, application_name, schedule_interval, max_runtime, max_retries, retry_period, proc_schema, proc_name, owner, scheduled, hypertable_id, config) FROM stdin;
    _timescaledb_config          postgres    false    222       3251.dat �          0    28447    banks 
   TABLE DATA           8   COPY public.banks (id, name, img_url, slug) FROM stdin;
    public          postgres    false    248       3533.dat �          0    28486 	   card_user 
   TABLE DATA           9   COPY public.card_user (id, card_id, user_id) FROM stdin;
    public          postgres    false    254       3539.dat �          0    28458    cards 
   TABLE DATA           l   COPY public.cards (id, name, interest_rate, annual_fee, img_url, slug, featured, bank_id, link) FROM stdin;
    public          postgres    false    250       3535.dat �          0    28504 
   categories 
   TABLE DATA           M   COPY public.categories (id, name, img_url, icon, slug, featured) FROM stdin;
    public          postgres    false    256       3541.dat �          0    28551    listings 
   TABLE DATA           D   COPY public.listings (id, reward_rate, vendor, card_id) FROM stdin;
    public          postgres    false    262       3547.dat �          0    28516    rewards 
   TABLE DATA           H   COPY public.rewards (id, reward_rate, card_id, category_id) FROM stdin;
    public          postgres    false    258       3543.dat �          0    28475    users 
   TABLE DATA           :   COPY public.users (id, name, email, password) FROM stdin;
    public          postgres    false    252       3537.dat �          0    28534    vendors 
   TABLE DATA           f   COPY public.vendors (id, name, featured, category_id, img_url, slug, relative_link, link) FROM stdin;
    public          postgres    false    260       3545.dat �           0    0    chunk_constraint_name    SEQUENCE SET     R   SELECT pg_catalog.setval('_timescaledb_catalog.chunk_constraint_name', 1, false);
          _timescaledb_catalog          postgres    false    218         �           0    0    chunk_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('_timescaledb_catalog.chunk_id_seq', 1, false);
          _timescaledb_catalog          postgres    false    215         �           0    0    dimension_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('_timescaledb_catalog.dimension_id_seq', 1, false);
          _timescaledb_catalog          postgres    false    211         �           0    0    dimension_slice_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('_timescaledb_catalog.dimension_slice_id_seq', 1, false);
          _timescaledb_catalog          postgres    false    213         �           0    0    hypertable_id_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('_timescaledb_catalog.hypertable_id_seq', 1, false);
          _timescaledb_catalog          postgres    false    206         �           0    0    bgw_job_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('_timescaledb_config.bgw_job_id_seq', 1000, false);
          _timescaledb_config          postgres    false    221         �           0    0    banks_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.banks_id_seq', 14, true);
          public          postgres    false    247         �           0    0    card_user_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.card_user_id_seq', 2, true);
          public          postgres    false    253         �           0    0    cards_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.cards_id_seq', 13, true);
          public          postgres    false    249         �           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 12, true);
          public          postgres    false    255         �           0    0    listings_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.listings_id_seq', 4, true);
          public          postgres    false    261         �           0    0    rewards_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.rewards_id_seq', 45, true);
          public          postgres    false    257         �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    251         �           0    0    vendors_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.vendors_id_seq', 18, true);
          public          postgres    false    259         )           2606    28455    banks banks_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.banks
    ADD CONSTRAINT banks_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.banks DROP CONSTRAINT banks_pkey;
       public            postgres    false    248         /           2606    28491    card_user card_user_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.card_user
    ADD CONSTRAINT card_user_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.card_user DROP CONSTRAINT card_user_pkey;
       public            postgres    false    254         +           2606    28467    cards cards_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.cards DROP CONSTRAINT cards_pkey;
       public            postgres    false    250         1           2606    28513    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    256         7           2606    28556    listings listings_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.listings
    ADD CONSTRAINT listings_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.listings DROP CONSTRAINT listings_pkey;
       public            postgres    false    262         3           2606    28521    rewards rewards_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.rewards
    ADD CONSTRAINT rewards_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.rewards DROP CONSTRAINT rewards_pkey;
       public            postgres    false    258         -           2606    28483    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    252         5           2606    28543    vendors vendors_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.vendors
    ADD CONSTRAINT vendors_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.vendors DROP CONSTRAINT vendors_pkey;
       public            postgres    false    260         9           2606    28492     card_user card_user_card_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.card_user
    ADD CONSTRAINT card_user_card_id_fkey FOREIGN KEY (card_id) REFERENCES public.cards(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.card_user DROP CONSTRAINT card_user_card_id_fkey;
       public          postgres    false    3371    254    250         :           2606    28497     card_user card_user_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.card_user
    ADD CONSTRAINT card_user_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.card_user DROP CONSTRAINT card_user_user_id_fkey;
       public          postgres    false    3373    254    252         8           2606    28468    cards cards_bank_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_bank_id_fkey FOREIGN KEY (bank_id) REFERENCES public.banks(id) ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.cards DROP CONSTRAINT cards_bank_id_fkey;
       public          postgres    false    3369    248    250         >           2606    28562    listings listings_card_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.listings
    ADD CONSTRAINT listings_card_id_fkey FOREIGN KEY (card_id) REFERENCES public.cards(id) ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.listings DROP CONSTRAINT listings_card_id_fkey;
       public          postgres    false    250    3371    262         ?           2606    28557    listings listings_vendor_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.listings
    ADD CONSTRAINT listings_vendor_fkey FOREIGN KEY (vendor) REFERENCES public.vendors(id) ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.listings DROP CONSTRAINT listings_vendor_fkey;
       public          postgres    false    3381    262    260         ;           2606    28522    rewards rewards_card_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rewards
    ADD CONSTRAINT rewards_card_id_fkey FOREIGN KEY (card_id) REFERENCES public.cards(id) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.rewards DROP CONSTRAINT rewards_card_id_fkey;
       public          postgres    false    258    250    3371         <           2606    28527     rewards rewards_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rewards
    ADD CONSTRAINT rewards_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.rewards DROP CONSTRAINT rewards_category_id_fkey;
       public          postgres    false    3377    256    258         =           2606    28544     vendors vendors_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.vendors
    ADD CONSTRAINT vendors_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.vendors DROP CONSTRAINT vendors_category_id_fkey;
       public          postgres    false    3377    260    256                                                                                                                                                                                                                                                                                                                                                3262.dat                                                                                            0000600 0004000 0002000 00000000005 14372717504 0014253 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3261.dat                                                                                            0000600 0004000 0002000 00000000005 14372717504 0014252 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3260.dat                                                                                            0000600 0004000 0002000 00000000005 14372717504 0014251 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3237.dat                                                                                            0000600 0004000 0002000 00000000005 14372717504 0014255 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3244.dat                                                                                            0000600 0004000 0002000 00000000005 14372717505 0014254 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3240.dat                                                                                            0000600 0004000 0002000 00000000005 14372717505 0014250 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3242.dat                                                                                            0000600 0004000 0002000 00000000005 14372717505 0014252 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3246.dat                                                                                            0000600 0004000 0002000 00000000005 14372717505 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3249.dat                                                                                            0000600 0004000 0002000 00000000005 14372717505 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3248.dat                                                                                            0000600 0004000 0002000 00000000005 14372717505 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3258.dat                                                                                            0000600 0004000 0002000 00000000005 14372717505 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3253.dat                                                                                            0000600 0004000 0002000 00000000005 14372717505 0014254 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3255.dat                                                                                            0000600 0004000 0002000 00000000005 14372717505 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3254.dat                                                                                            0000600 0004000 0002000 00000000005 14372717505 0014255 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3256.dat                                                                                            0000600 0004000 0002000 00000000005 14372717505 0014257 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3257.dat                                                                                            0000600 0004000 0002000 00000000005 14372717506 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3238.dat                                                                                            0000600 0004000 0002000 00000000005 14372717506 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3252.dat                                                                                            0000600 0004000 0002000 00000000072 14372717506 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        exported_uuid	16d2511a-ba41-41da-8f40-326b7ec254d9	t
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                      3259.dat                                                                                            0000600 0004000 0002000 00000000005 14372717506 0014263 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3239.dat                                                                                            0000600 0004000 0002000 00000000005 14372717506 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3251.dat                                                                                            0000600 0004000 0002000 00000000005 14372717506 0014253 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3533.dat                                                                                            0000600 0004000 0002000 00000000613 14372717506 0014263 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        3	Tangerine	\N	\N
6	Scotiabank	\N	\N
7	Rogers	\N	\N
8	MBNA	\N	\N
10	TD	\N	\N
11	Desjardins	\N	\N
13	National Bank	\N	\N
14	PC Financial	\N	\N
5	RBC	/assets/img/bank/rbc.jpeg	\N
1	Capital One	/assets/img/bank/capital-one.jpeg	\N
2	AMEX	/assets/img/bank/amex.png	\N
9	BMO	/assets/img/bank/bmo.jpeg	\N
12	Canadian Tire	/assets/img/bank/canadian-tire.png	\N
4	CIBC	/assets/img/bank/cibc.png	\N
\.


                                                                                                                     3539.dat                                                                                            0000600 0004000 0002000 00000000021 14372717506 0014262 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	1
2	4	1
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               3535.dat                                                                                            0000600 0004000 0002000 00000003473 14372717506 0014274 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	BMO World Elite Mastercard	20.99	120	bmo-cash-back-world-elite.webp	\N	t	9	https://www.bmo.com/main/personal/credit-cards/bmo-cashback-world-elite-mastercard/
2	Rogers World Elite Mastercard	19.99	0	rogers-world-elite.png	\N	t	7	https://rogersbank.com/en/rogers_worldelite_mastercard_details
3	AMEX SimplyCash Preferred Card	20.99	119.88	amex-simplycash-preferred.png	\N	t	2	https://www.americanexpress.com/ca/en/credit-cards/simply-cash-preferred/
4	Tangerine World Mastercard	19.95	0	tangerine-world.png	\N	t	3	https://www.tangerine.ca/en/products/spending/creditcard/world
5	Amazon.ca Rewards Mastercard	19.99	0	amazon-rewards.png	\N	t	8	https://www.amazon.ca/MBNA-Amazon-ca-Rewards-Mastercard/dp/B07MJM4F44
6	AMEX Air Miles Platinum Card	20.99	119.88	amex-air-miles-platinum.png	\N	t	2	https://www.americanexpress.com/ca/en/credit-cards/air-miles-platinum-credit-card/
7	RBC Avion Infinite VISA	19.99	119.88	rbc-avion-infinite.png	\N	t	5	https://www.rbcroyalbank.com/credit-cards/travel/rbc-avion-visa-infinite.html
8	AMEX Green Card	20.99	0	amex-green.png	\N	t	2	https://www.americanexpress.com/ca/en/credit-cards/green-card/
9	Triangle Mastercard	19.99	0	Triangle_Mastercard_Mobile.avif	\N	f	12	https://www.ctfs.com/content/ctfs/en/credit_cards.html
10	AMEX Platinum Card	20.99	699	amex-platinum.webp	\N	f	2	https://www.americanexpress.com/ca/en/charge-cards/the-platinum-card/
11	TD Cash Back Visa Card	19.99	0	td-cash-back-entry.jpeg	\N	f	10	https://www.td.com/ca/en/personal-banking/products/credit-cards/cash-back/cash-back-visa-card
12	TD Infinite Cash Back Visa Card	20.99	139	td-cash-back-infinite-visa.jpeg	\N	f	10	https://www.td.com/ca/en/personal-banking/products/credit-cards/cash-back/cash-back-visa-infinite-card
13	Walmart Rewards Capital One	20.99	0	walmart.png	\N	f	1	https://www.walmart.com/cp/walmart-credit-card/632402
\.


                                                                                                                                                                                                     3541.dat                                                                                            0000600 0004000 0002000 00000000427 14372717506 0014265 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Grocery	\N	\N	\N	t
2	Recurring Bill	\N	\N	\N	t
3	Furniture	\N	\N	\N	f
4	Drug Store	\N	\N	\N	f
5	Restaurants	\N	\N	\N	t
6	Home Improvement	\N	\N	\N	f
7	Hotel	\N	\N	\N	f
8	Entertainment	\N	\N	\N	t
9	Gas	\N	\N	\N	t
10	Transit	\N	\N	\N	t
11	Other	\N	\N	\N	f
12	USD	\N	\N	\N	f
\.


                                                                                                                                                                                                                                         3547.dat                                                                                            0000600 0004000 0002000 00000000054 14372717506 0014267 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	2.5	2	5
2	1.5	4	2
3	4	11	9
4	5	18	13
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    3543.dat                                                                                            0000600 0004000 0002000 00000000702 14372717507 0014264 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	5	1	1
2	4	1	10
3	3	1	9
4	2	1	2
5	1	1	11
6	1.5	2	11
7	3	2	12
8	4	3	9
9	4	3	1
10	2	3	11
11	2	4	1
12	2	4	2
13	2	4	3
14	2	4	4
15	2	4	5
16	2	4	6
17	2	4	7
18	2	4	8
19	2	4	9
20	2	4	10
21	0.5	4	11
22	2.5	5	12
23	2.3	6	5
24	2.3	6	9
25	2.3	6	10
26	1	6	11
27	1	7	11
28	1	8	11
29	2	8	7
30	1	5	11
31	1.5	9	1
32	0.5	9	11
33	3	10	5
34	2	10	7
35	1	10	11
36	1	11	2
37	1	11	1
38	1	11	9
39	0.5	11	11
40	1	12	11
41	3	12	1
42	3	12	2
43	3	12	9
44	2	13	5
45	1	13	11
\.


                                                              3537.dat                                                                                            0000600 0004000 0002000 00000000050 14372717507 0014263 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	John Doe	test@remax.com	password
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        3545.dat                                                                                            0000600 0004000 0002000 00000001650 14372717507 0014271 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Home Depot	f	6	home-depot.png	\N	/vendor/home-depot	\N
2	Amazon	t	11	amazon.png	\N	/vendor/amazon	\N
3	Telus	t	2	telus.png	\N	/vendor/telus	\N
4	Rogers	f	2	rogers.png	\N	/vendor/rogers	\N
5	McDonalds	t	5	mcdonalds.png	\N	/vendor/mcdonalds	\N
6	The Keg	t	5	the-keg.jpeg	\N	/vendor/the-keg	\N
7	Moxies	t	5	moxies.jpeg	\N	/vendor/moxies	\N
8	Boston Pizza	t	5	boston-pizza.png	\N	/vendor/boston-pizza	\N
9	Netflix	t	8	netflix.png	\N	/vendor/netflix	\N
10	Disney Plus	t	8	disney-plus.jpeg	\N	/vendor/disney-plus	\N
11	Canadian Tire	f	6	ct.png	\N	/vendor/canadian-tire	\N
12	No Frills	f	1	no-frills.jpeg	\N	/vendor/no-frills	\N
16	Shell	f	9	shell.png	\N	/vendor/shell	\N
17	Esso	f	9	esso.png	\N	/vendor/esso	\N
18	Walmart	f	1	walmart.jpeg	\N	/vendor/walmart	\N
15	Petro Canada	f	9	petro-canada.png	\N	/vendor/petro	\N
13	Burger King	f	5	burger-king.png	\N	/vendor/burger-king	\N
14	Starbucks	f	5	starbucks.jpeg	\N	/vendor/starbucks	\N
\.


                                                                                        restore.sql                                                                                         0000600 0004000 0002000 00000060555 14372717507 0015414 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 14.6 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE remax;
--
-- Name: remax; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE remax WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE remax OWNER TO postgres;

\connect remax

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: timescaledb; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS timescaledb WITH SCHEMA public;


--
-- Name: EXTENSION timescaledb; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION timescaledb IS 'Enables scalable inserts and complex queries for time-series data';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: banks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.banks (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    img_url text,
    slug text
);


ALTER TABLE public.banks OWNER TO postgres;

--
-- Name: banks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.banks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.banks_id_seq OWNER TO postgres;

--
-- Name: banks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.banks_id_seq OWNED BY public.banks.id;


--
-- Name: card_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.card_user (
    id integer NOT NULL,
    card_id integer,
    user_id integer
);


ALTER TABLE public.card_user OWNER TO postgres;

--
-- Name: card_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.card_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.card_user_id_seq OWNER TO postgres;

--
-- Name: card_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.card_user_id_seq OWNED BY public.card_user.id;


--
-- Name: cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cards (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    interest_rate double precision,
    annual_fee double precision,
    img_url text,
    slug text,
    featured boolean DEFAULT false,
    bank_id integer,
    link text
);


ALTER TABLE public.cards OWNER TO postgres;

--
-- Name: cards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cards_id_seq OWNER TO postgres;

--
-- Name: cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cards_id_seq OWNED BY public.cards.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    img_url text,
    icon text,
    slug text,
    featured boolean DEFAULT false
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: listings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.listings (
    id integer NOT NULL,
    reward_rate double precision NOT NULL,
    vendor integer,
    card_id integer
);


ALTER TABLE public.listings OWNER TO postgres;

--
-- Name: listings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.listings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.listings_id_seq OWNER TO postgres;

--
-- Name: listings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.listings_id_seq OWNED BY public.listings.id;


--
-- Name: rewards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rewards (
    id integer NOT NULL,
    reward_rate double precision NOT NULL,
    card_id integer,
    category_id integer
);


ALTER TABLE public.rewards OWNER TO postgres;

--
-- Name: rewards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rewards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rewards_id_seq OWNER TO postgres;

--
-- Name: rewards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rewards_id_seq OWNED BY public.rewards.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: vendors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vendors (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    featured boolean DEFAULT false,
    category_id integer,
    img_url text,
    slug text,
    relative_link text,
    link text
);


ALTER TABLE public.vendors OWNER TO postgres;

--
-- Name: vendors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vendors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vendors_id_seq OWNER TO postgres;

--
-- Name: vendors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vendors_id_seq OWNED BY public.vendors.id;


--
-- Name: banks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.banks ALTER COLUMN id SET DEFAULT nextval('public.banks_id_seq'::regclass);


--
-- Name: card_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.card_user ALTER COLUMN id SET DEFAULT nextval('public.card_user_id_seq'::regclass);


--
-- Name: cards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards ALTER COLUMN id SET DEFAULT nextval('public.cards_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: listings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.listings ALTER COLUMN id SET DEFAULT nextval('public.listings_id_seq'::regclass);


--
-- Name: rewards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rewards ALTER COLUMN id SET DEFAULT nextval('public.rewards_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: vendors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendors ALTER COLUMN id SET DEFAULT nextval('public.vendors_id_seq'::regclass);


--
-- Data for Name: cache_inval_bgw_job; Type: TABLE DATA; Schema: _timescaledb_cache; Owner: postgres
--

COPY _timescaledb_cache.cache_inval_bgw_job  FROM stdin;
\.
COPY _timescaledb_cache.cache_inval_bgw_job  FROM '$$PATH$$/3262.dat';

--
-- Data for Name: cache_inval_extension; Type: TABLE DATA; Schema: _timescaledb_cache; Owner: postgres
--

COPY _timescaledb_cache.cache_inval_extension  FROM stdin;
\.
COPY _timescaledb_cache.cache_inval_extension  FROM '$$PATH$$/3261.dat';

--
-- Data for Name: cache_inval_hypertable; Type: TABLE DATA; Schema: _timescaledb_cache; Owner: postgres
--

COPY _timescaledb_cache.cache_inval_hypertable  FROM stdin;
\.
COPY _timescaledb_cache.cache_inval_hypertable  FROM '$$PATH$$/3260.dat';

--
-- Data for Name: hypertable; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.hypertable (id, schema_name, table_name, associated_schema_name, associated_table_prefix, num_dimensions, chunk_sizing_func_schema, chunk_sizing_func_name, chunk_target_size, compression_state, compressed_hypertable_id, replication_factor) FROM stdin;
\.
COPY _timescaledb_catalog.hypertable (id, schema_name, table_name, associated_schema_name, associated_table_prefix, num_dimensions, chunk_sizing_func_schema, chunk_sizing_func_name, chunk_target_size, compression_state, compressed_hypertable_id, replication_factor) FROM '$$PATH$$/3237.dat';

--
-- Data for Name: chunk; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.chunk (id, hypertable_id, schema_name, table_name, compressed_chunk_id, dropped) FROM stdin;
\.
COPY _timescaledb_catalog.chunk (id, hypertable_id, schema_name, table_name, compressed_chunk_id, dropped) FROM '$$PATH$$/3244.dat';

--
-- Data for Name: dimension; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.dimension (id, hypertable_id, column_name, column_type, aligned, num_slices, partitioning_func_schema, partitioning_func, interval_length, integer_now_func_schema, integer_now_func) FROM stdin;
\.
COPY _timescaledb_catalog.dimension (id, hypertable_id, column_name, column_type, aligned, num_slices, partitioning_func_schema, partitioning_func, interval_length, integer_now_func_schema, integer_now_func) FROM '$$PATH$$/3240.dat';

--
-- Data for Name: dimension_slice; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.dimension_slice (id, dimension_id, range_start, range_end) FROM stdin;
\.
COPY _timescaledb_catalog.dimension_slice (id, dimension_id, range_start, range_end) FROM '$$PATH$$/3242.dat';

--
-- Data for Name: chunk_constraint; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.chunk_constraint (chunk_id, dimension_slice_id, constraint_name, hypertable_constraint_name) FROM stdin;
\.
COPY _timescaledb_catalog.chunk_constraint (chunk_id, dimension_slice_id, constraint_name, hypertable_constraint_name) FROM '$$PATH$$/3246.dat';

--
-- Data for Name: chunk_data_node; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.chunk_data_node (chunk_id, node_chunk_id, node_name) FROM stdin;
\.
COPY _timescaledb_catalog.chunk_data_node (chunk_id, node_chunk_id, node_name) FROM '$$PATH$$/3249.dat';

--
-- Data for Name: chunk_index; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.chunk_index (chunk_id, index_name, hypertable_id, hypertable_index_name) FROM stdin;
\.
COPY _timescaledb_catalog.chunk_index (chunk_id, index_name, hypertable_id, hypertable_index_name) FROM '$$PATH$$/3248.dat';

--
-- Data for Name: compression_chunk_size; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.compression_chunk_size (chunk_id, compressed_chunk_id, uncompressed_heap_size, uncompressed_toast_size, uncompressed_index_size, compressed_heap_size, compressed_toast_size, compressed_index_size, numrows_pre_compression, numrows_post_compression) FROM stdin;
\.
COPY _timescaledb_catalog.compression_chunk_size (chunk_id, compressed_chunk_id, uncompressed_heap_size, uncompressed_toast_size, uncompressed_index_size, compressed_heap_size, compressed_toast_size, compressed_index_size, numrows_pre_compression, numrows_post_compression) FROM '$$PATH$$/3258.dat';

--
-- Data for Name: continuous_agg; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.continuous_agg (mat_hypertable_id, raw_hypertable_id, user_view_schema, user_view_name, partial_view_schema, partial_view_name, bucket_width, direct_view_schema, direct_view_name, materialized_only) FROM stdin;
\.
COPY _timescaledb_catalog.continuous_agg (mat_hypertable_id, raw_hypertable_id, user_view_schema, user_view_name, partial_view_schema, partial_view_name, bucket_width, direct_view_schema, direct_view_name, materialized_only) FROM '$$PATH$$/3253.dat';

--
-- Data for Name: continuous_aggs_hypertable_invalidation_log; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.continuous_aggs_hypertable_invalidation_log (hypertable_id, lowest_modified_value, greatest_modified_value) FROM stdin;
\.
COPY _timescaledb_catalog.continuous_aggs_hypertable_invalidation_log (hypertable_id, lowest_modified_value, greatest_modified_value) FROM '$$PATH$$/3255.dat';

--
-- Data for Name: continuous_aggs_invalidation_threshold; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.continuous_aggs_invalidation_threshold (hypertable_id, watermark) FROM stdin;
\.
COPY _timescaledb_catalog.continuous_aggs_invalidation_threshold (hypertable_id, watermark) FROM '$$PATH$$/3254.dat';

--
-- Data for Name: continuous_aggs_materialization_invalidation_log; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.continuous_aggs_materialization_invalidation_log (materialization_id, lowest_modified_value, greatest_modified_value) FROM stdin;
\.
COPY _timescaledb_catalog.continuous_aggs_materialization_invalidation_log (materialization_id, lowest_modified_value, greatest_modified_value) FROM '$$PATH$$/3256.dat';

--
-- Data for Name: hypertable_compression; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.hypertable_compression (hypertable_id, attname, compression_algorithm_id, segmentby_column_index, orderby_column_index, orderby_asc, orderby_nullsfirst) FROM stdin;
\.
COPY _timescaledb_catalog.hypertable_compression (hypertable_id, attname, compression_algorithm_id, segmentby_column_index, orderby_column_index, orderby_asc, orderby_nullsfirst) FROM '$$PATH$$/3257.dat';

--
-- Data for Name: hypertable_data_node; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.hypertable_data_node (hypertable_id, node_hypertable_id, node_name, block_chunks) FROM stdin;
\.
COPY _timescaledb_catalog.hypertable_data_node (hypertable_id, node_hypertable_id, node_name, block_chunks) FROM '$$PATH$$/3238.dat';

--
-- Data for Name: metadata; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.metadata (key, value, include_in_telemetry) FROM stdin;
\.
COPY _timescaledb_catalog.metadata (key, value, include_in_telemetry) FROM '$$PATH$$/3252.dat';

--
-- Data for Name: remote_txn; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.remote_txn (data_node_name, remote_transaction_id) FROM stdin;
\.
COPY _timescaledb_catalog.remote_txn (data_node_name, remote_transaction_id) FROM '$$PATH$$/3259.dat';

--
-- Data for Name: tablespace; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.tablespace (id, hypertable_id, tablespace_name) FROM stdin;
\.
COPY _timescaledb_catalog.tablespace (id, hypertable_id, tablespace_name) FROM '$$PATH$$/3239.dat';

--
-- Data for Name: bgw_job; Type: TABLE DATA; Schema: _timescaledb_config; Owner: postgres
--

COPY _timescaledb_config.bgw_job (id, application_name, schedule_interval, max_runtime, max_retries, retry_period, proc_schema, proc_name, owner, scheduled, hypertable_id, config) FROM stdin;
\.
COPY _timescaledb_config.bgw_job (id, application_name, schedule_interval, max_runtime, max_retries, retry_period, proc_schema, proc_name, owner, scheduled, hypertable_id, config) FROM '$$PATH$$/3251.dat';

--
-- Data for Name: banks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.banks (id, name, img_url, slug) FROM stdin;
\.
COPY public.banks (id, name, img_url, slug) FROM '$$PATH$$/3533.dat';

--
-- Data for Name: card_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.card_user (id, card_id, user_id) FROM stdin;
\.
COPY public.card_user (id, card_id, user_id) FROM '$$PATH$$/3539.dat';

--
-- Data for Name: cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cards (id, name, interest_rate, annual_fee, img_url, slug, featured, bank_id, link) FROM stdin;
\.
COPY public.cards (id, name, interest_rate, annual_fee, img_url, slug, featured, bank_id, link) FROM '$$PATH$$/3535.dat';

--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, img_url, icon, slug, featured) FROM stdin;
\.
COPY public.categories (id, name, img_url, icon, slug, featured) FROM '$$PATH$$/3541.dat';

--
-- Data for Name: listings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.listings (id, reward_rate, vendor, card_id) FROM stdin;
\.
COPY public.listings (id, reward_rate, vendor, card_id) FROM '$$PATH$$/3547.dat';

--
-- Data for Name: rewards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rewards (id, reward_rate, card_id, category_id) FROM stdin;
\.
COPY public.rewards (id, reward_rate, card_id, category_id) FROM '$$PATH$$/3543.dat';

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password) FROM stdin;
\.
COPY public.users (id, name, email, password) FROM '$$PATH$$/3537.dat';

--
-- Data for Name: vendors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vendors (id, name, featured, category_id, img_url, slug, relative_link, link) FROM stdin;
\.
COPY public.vendors (id, name, featured, category_id, img_url, slug, relative_link, link) FROM '$$PATH$$/3545.dat';

--
-- Name: chunk_constraint_name; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_catalog.chunk_constraint_name', 1, false);


--
-- Name: chunk_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_catalog.chunk_id_seq', 1, false);


--
-- Name: dimension_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_catalog.dimension_id_seq', 1, false);


--
-- Name: dimension_slice_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_catalog.dimension_slice_id_seq', 1, false);


--
-- Name: hypertable_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_catalog.hypertable_id_seq', 1, false);


--
-- Name: bgw_job_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_config; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_config.bgw_job_id_seq', 1000, false);


--
-- Name: banks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.banks_id_seq', 14, true);


--
-- Name: card_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.card_user_id_seq', 2, true);


--
-- Name: cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cards_id_seq', 13, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 12, true);


--
-- Name: listings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.listings_id_seq', 4, true);


--
-- Name: rewards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rewards_id_seq', 45, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: vendors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vendors_id_seq', 18, true);


--
-- Name: banks banks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.banks
    ADD CONSTRAINT banks_pkey PRIMARY KEY (id);


--
-- Name: card_user card_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.card_user
    ADD CONSTRAINT card_user_pkey PRIMARY KEY (id);


--
-- Name: cards cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: listings listings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.listings
    ADD CONSTRAINT listings_pkey PRIMARY KEY (id);


--
-- Name: rewards rewards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rewards
    ADD CONSTRAINT rewards_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: vendors vendors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendors
    ADD CONSTRAINT vendors_pkey PRIMARY KEY (id);


--
-- Name: card_user card_user_card_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.card_user
    ADD CONSTRAINT card_user_card_id_fkey FOREIGN KEY (card_id) REFERENCES public.cards(id) ON DELETE CASCADE;


--
-- Name: card_user card_user_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.card_user
    ADD CONSTRAINT card_user_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: cards cards_bank_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_bank_id_fkey FOREIGN KEY (bank_id) REFERENCES public.banks(id) ON DELETE CASCADE;


--
-- Name: listings listings_card_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.listings
    ADD CONSTRAINT listings_card_id_fkey FOREIGN KEY (card_id) REFERENCES public.cards(id) ON DELETE CASCADE;


--
-- Name: listings listings_vendor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.listings
    ADD CONSTRAINT listings_vendor_fkey FOREIGN KEY (vendor) REFERENCES public.vendors(id) ON DELETE CASCADE;


--
-- Name: rewards rewards_card_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rewards
    ADD CONSTRAINT rewards_card_id_fkey FOREIGN KEY (card_id) REFERENCES public.cards(id) ON DELETE CASCADE;


--
-- Name: rewards rewards_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rewards
    ADD CONSTRAINT rewards_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE CASCADE;


--
-- Name: vendors vendors_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendors
    ADD CONSTRAINT vendors_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   