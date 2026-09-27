import {
  TimelineEra,
  ContemporarySphere,
  GenderIssue,
  EditorialArticle,
  ForumPost,
  SupportResource,
  ReferenceEntry,
  TeamMember,
} from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_silungan_shelter_1790484604994.jpg';
export const BABAYLAN_IMAGE = '/src/assets/images/babaylan_history_1790484618774.jpg';
export const CONTEMPORARY_IMAGE = '/src/assets/images/contemporary_filipino_roles_1790484629615.jpg';
export const EDITORIAL_DESK_IMAGE = '/src/assets/images/editorial_story_silong_tala_1790484643224.jpg';
export const SILUNGAN_LOGO = '/src/assets/images/silungan_ph_logo_1790488734554.jpg';

export const TIMELINE_DATA: TimelineEra[] = [
  {
    id: 'pre-colonial',
    era: 'Pre-Colonial Philippines',
    period: 'Prior to 1565',
    theme: 'Egalitarian Balance & Spiritual Leadership',
    summary:
      'Indigenous Philippine societies recognized women and non-binary individuals as essential community anchors with spiritual authority, property rights, and autonomy.',
    familyRole:
      'Bilateral kinship systems; mothers held equal rights in child-rearing and divorce. Dowry (bigay-kaya) was paid by groom to the bride’s family as recompense for losing a daughter.',
    leadership:
      'High political respect; female Datus existed, and matrilineal lineages held weight in chieftain inheritances.',
    laborEducation:
      'Productive agricultural workers, master weavers, potters, and traders. Knowledge passed orally through customary apprenticeships.',
    babaylanOrKeyFigures:
      'The Babaylan (also Katalonan, Mumbaki, Asog): Spiritual shamans, healers, philosophers, and keepers of oral epic traditions. Many male or gender-crossing babaylan (Asog/Bayog) lived as women and held revered status.',
    citation:
      'Brewer, C. (2004). Shamanism, Catholicism and Gender Relations in Colonial Philippines, 1521-1685. Ashgate Publishing.',
  },
  {
    id: 'spanish-colonial',
    era: 'Spanish Colonial Period',
    period: '1565 – 1898',
    theme: 'Patriarchal Imposition & The "Maria Clara" Mold',
    summary:
      'The Spanish Crown and Catholic clergy introduced strict Iberian patriarchal codes, confining women to the domestic sphere and casting Babaylans as heretics.',
    familyRole:
      'Patria potestas: Complete subordination of wives to husbands under Las Siete Partidas. Women lost rights to independently own or sell property without spousal consent.',
    leadership:
      'Barred from formal political governance and civil administration; public authority restricted exclusively to Spanish and principalia men.',
    laborEducation:
      'Confined to domestic chores, needlework, and religious catechism. Beaterios (convent schools) molded the subservient, modest, self-sacrificing "Maria Clara" archetype.',
    babaylanOrKeyFigures:
      'Subversive heroines: Gabriela Silang (military commander in Ilocos), Gregoria de Jesus (Lakambini of Katipunan), and Patrocinio Gamboa who defied the colonial domestic cage.',
    citation:
      'Mananzan, Sr. M. J. (1991). The Woman Question in the Philippines. St. Scholastica’s College Institute of Women’s Studies.',
  },
  {
    id: 'american-colonial',
    era: 'American Colonial Period',
    period: '1898 – 1946',
    theme: 'Public Education & The Women’s Suffrage Victory',
    summary:
      'Modern secular education opened professions for Filipinas, catalyzing the organized women’s movement that won the vote in 1937 despite lingering Western domestic ideals.',
    familyRole:
      'Nuclear family ideal introduced; while women remained the "household manager", civil code reforms slowly restored property rights and maternal rights.',
    leadership:
      'Suffrage campaign culminated in the 1937 national plebiscite where over 447,000 Filipinas voted YES, opening public office to women candidates.',
    laborEducation:
      'Establishment of the public school system through the Thomasites. Filipinas entered nursing, pharmacy, teaching, and civil service, yet faced wage disparity.',
    babaylanOrKeyFigures:
      'Suffragist pioneers: Pura Villanueva Kalaw (Asociación Feminista Filipina), Josefa Llanes Escoda (National Federation of Women’s Clubs), and Sofia Reyes de Veyra.',
    citation:
      'Camagay, M. L. (1995). Working Women of Manila in the 19th and Early 20th Century. University of the Philippines Press.',
  },
  {
    id: 'post-war',
    era: 'Post-War to Martial Law',
    period: '1946 – 1986',
    theme: 'Industrialization, Feminism & Underground Resistance',
    summary:
      'Economic restructuring pushed women into factory and export service labor, while authoritarian rule catalyzed militant feminist resistance groups.',
    familyRole:
      'The double burden emerged: women had to work outside the home to cope with inflation while still bearing 100% of unpaid household care.',
    leadership:
      'Women formed underground resistance networks during Martial Law; emergence of MAKIBAKA (Malayang Kilusan ng Bagong Kababaihan) linking gender equality with national liberation.',
    laborEducation:
      'Rapid entry into garments, electronics BPOs, and domestic migration. The 1974 Labor Code formalized overseas contract work, beginning the feminization of OFW labor.',
    babaylanOrKeyFigures:
      'Lorena Barros (MAKIBAKA founder), Liliosa Hilao, Judy Taguiwalo, and thousands of mothers who led protests in the Bantayog ng mga Bayani roster.',
    citation:
      'Eviota, E. U. (1992). The Political Economy of Gender: Women and the Sexual Division of Labour in the Philippines. Zed Books.',
  },
  {
    id: 'contemporary',
    era: 'Contemporary Philippines',
    period: '1986 – Present',
    theme: 'Legislative Advances vs. Entrenched Realities',
    summary:
      'A paradox of high gender indices alongside structural violence, care poverty, overseas family separation, and slow progress for LGBTQ+ legal protection.',
    familyRole:
      'Emergence of transnational families with OFW mothers; evolving roles of fathers as active caregivers, though traditional "padre de pamilya" pressure persists.',
    leadership:
      'Two female presidents and prominent lawmakers, yet local government representation remains below 30%, heavily entrenched in political dynasties.',
    laborEducation:
      'Women outnumber men in tertiary graduation and dominate healthcare and BPO, yet endure a care deficit and lack of divorce laws in the country.',
    babaylanOrKeyFigures:
      'Contemporary community champions: Patricia Non (Community Pantry movement), LGBTQ+ advocates pushing for the SOGIE Equality Bill, and rural women environmental defenders.',
    citation:
      'Philippine Commission on Women. (2023). Women and Men in the Philippines: Statistical Handbook. PCW.',
  },
];

export const CONTEMPORARY_SPHERES: ContemporarySphere[] = [
  {
    id: 'family',
    title: 'Family & Domestic Life',
    kicker: 'Padre de Pamilya vs. Ilaw ng Tahanan',
    expectations:
      'Fathers are culturally expected to be sole financial pillars ("Haligi ng Tahanan"), while mothers are idealized as unconditional, self-sacrificing care providers ("Ilaw ng Tahanan").',
    realities:
      'Filipino women spend an average of 4.5 hours daily on unpaid care and domestic work compared to men’s 1.5 hours. Furthermore, millions of households are sustained by single mothers or female OFWs working overseas.',
    challenges: [
      'Uncompensated domestic care burden leading to "time poverty"',
      'Stigma against stay-at-home fathers or emotionally expressive men',
      'Absence of divorce laws forcing spouses to remain in abusive unions',
    ],
    progressNotes: [
      'Rise of "Hands-on Dads" (Tutok Tatay) actively breaking machismo traditions',
      'Paternity leave advocacy seeking expansion beyond the statutory 7 days',
    ],
    stats: [
      { label: 'Daily Unpaid Care Gap', value: '3.0x', source: 'Philippine Statistics Authority (PSA)' },
      { label: 'Solo Parents who are Female', value: '95%', source: 'DSWD Comprehensive Study' },
    ],
  },
  {
    id: 'workplace',
    title: 'Workplace & Economy',
    kicker: 'The Care Deficit & Feminization of Labor',
    expectations:
      'Men are assumed to pursue technical, leadership, or high-risk careers; women are steered into nurturing professions like nursing, education, and hospitality.',
    realities:
      'Women dominate the BPO industry (54%) and healthcare, yet remain underrepresented in senior corporate executive roles. Filipina overseas domestic workers remit billions but face acute vulnerability abroad.',
    challenges: [
      'The "maternal wall": penalty on career advancement upon childbearing',
      'Informal economy precarity without social security or maternity protections',
      'Subtle gendered hiring bias for corporate executive appointments',
    ],
    progressNotes: [
      'Expanded Maternity Leave Act (RA 11210) granting 105 paid days',
      'High ranking in Global Gender Gap workplace parity metrics (WEF Rank #25)',
    ],
    stats: [
      { label: 'BPO Workforce Representation', value: '54%', source: 'IT-BPO Association of the PH' },
      { label: 'Wage Penalty in Informal Sector', value: '18%', source: 'Philippine Institute for Development Studies' },
    ],
  },
  {
    id: 'education',
    title: 'Education & Academics',
    kicker: 'Reversed Enrolment vs. Gendered Tracks',
    expectations:
      'Traditional views assumed boys needed higher schooling for breadwinning, but contemporary trends show Filipinas outperforming and staying longer in universities.',
    realities:
      'While women hold 57% of bachelor’s degrees in the Philippines, course tracks remain gender-segregated: engineering and tech remain male-dominated, while education and care remain female-dominated.',
    challenges: [
      'Boy dropouts due to early child labor or breadwinning demands in rural areas',
      'Restrictive gendered haircut and uniform rules punishing transgender students',
      'Gaps in comprehensive sexuality education across public secondary schools',
    ],
    progressNotes: [
      'CHED gender-responsive guidelines mandating Safe Spaces desks on campuses',
      'Growing student councils implementing SOGIESC-inclusive graduation policies',
    ],
    stats: [
      { label: 'Tertiary Degree Holders (Female)', value: '57.2%', source: 'CHED Higher Education Data' },
      { label: 'Secondary Dropout Risk (Male vs Female)', value: '1.4x', source: 'DepEd Basic Education Census' },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & Politics',
    kicker: 'Dynasty Gatekeeping & The Grassroots Contrast',
    expectations:
      'Politics is widely perceived as a rough, masculine arena of patronage and strongman posturing, often framing women leaders either as mothers or proxies of political dynasties.',
    realities:
      'Although the Philippines produced two female heads of state (Corazon Aquino, Gloria Macapagal-Arroyo), women occupy fewer than 23% of congressional and local executive seats.',
    challenges: [
      'Dominance of political dynasties using female relatives as placeholder candidates',
      'Misogynistic rhetoric and gendered disinformation campaigns targeting vocal female leaders',
      'Absence of a legislated gender quota in national party lists',
    ],
    progressNotes: [
      'Magna Carta of Women (RA 9710) setting incremental 50% target for third-level civil service',
      'Effective grassroots disaster governance by female barangay captains',
    ],
    stats: [
      { label: 'Women in Local Executive Offices', value: '22.8%', source: 'DILG LGOM Data' },
      { label: 'Global Ranking on Political Empowerment', value: '#34', source: 'WEF Gender Gap Report' },
    ],
  },
  {
    id: 'media',
    title: 'Media & Cultural Narrative',
    kicker: 'From Martyr Teleseryes to Complex Representation',
    expectations:
      'Popular entertainment has long commodified women as suffering martyrs ("api"), manipulative mistresses ("kabit"), or passive romantic prizes, while gay men were reduced to slapstick comedic relief.',
    realities:
      'Filipino independent cinema and digital spaces are reshaping the narrative, offering three-dimensional portrayals of queer youth, empowered matriarchs, and vulnerable male characters.',
    challenges: [
      'Daytime television melodramas reinforcing toxic marital martyrdom',
      'Sensationalized reporting on gender-based violence that risks re-traumatizing survivors',
      'Cyber-harassment of feminist journalists and vocal cultural commentators',
    ],
    progressNotes: [
      'Surge in acclaimed Filipino queer cinema (e.g., Boy’s Love series, indie films at Cinemalaya)',
      'Brand advertising shifting away from hyper-sexualized alcohol and automotive ads',
    ],
    stats: [
      { label: 'Teleserye Female Roles Centered on Domestic Strife', value: '68%', source: 'UP Film Institute Study' },
      { label: 'Youth Consuming Progressive Digital Media', value: '82%', source: 'Philippine Youth Media Survey' },
    ],
  },
  {
    id: 'community',
    title: 'Community & Grassroots Action',
    kicker: 'The Volunteer Matriarchy of Barangay Care',
    expectations:
      'Community organizing in barangays is often dismissed as casual neighborly socialization ("chismisan") rather than recognized as vital public health and disaster resilience infrastructure.',
    realities:
      'Barangay Health Workers (BHWs) and Day Care Workers are 95% female volunteers who receive modest honoraria while safeguarding vaccination, maternal care, and community logistics.',
    challenges: [
      'Lack of security of tenure and statutory minimum wage for vital community health workers',
      'Disproportionate evacuation center burdens on women during typhoons and floods',
      'Security risks for indigenous women defending ancestral domains',
    ],
    progressNotes: [
      'Passage of the Magna Carta of Barangay Health Workers in legislative chambers',
      'Women-led community pantry and urban gardening initiatives multiplying in urban poor areas',
    ],
    stats: [
      { label: 'BHW Cadre who are Women', value: '96.2%', source: 'Department of Health (DOH)' },
      { label: 'Disaster Relief Frontliners at Barangay Level', value: '78%', source: 'NDRRMC Gender Assessment' },
    ],
  },
];

export const GENDER_ISSUES_DATA: GenderIssue[] = [
  {
    id: 'stereotypes-expectations',
    title: 'Rigid Stereotyping & The Machismo Complex',
    subtitle: 'The psychological toll of predefined boxes',
    whatIsIt:
      'The societal enforcement of hyper-masculine toughness ("tigasin", "bawal umiyak") on Filipino boys and submissive docility ("mahinhin", "matiisin") on Filipina girls from early childhood.',
    whyItMatters:
      'Toxic machismo discourages Filipino men from seeking mental health support—resulting in higher suicide rates among young men—while encouraging emotional suppression, domestic dominance, and risky health behaviors.',
    philippineContext:
      'Popular sayings like "Lalaki ka, magtiis ka" and "Babae ka kasi" function as early socialization tools in households, perpetuating generational cycles of emotional unavailability.',
    legalFrameworks: ['DepEd Order No. 32 (Gender-Responsive Basic Education Policy)'],
    verifiedFact:
      'The National Center for Mental Health reports that while women call more frequently for consultations, Filipino men account for over 75% of completed suicide cases in national vital statistics.',
    source: 'Philippine Statistics Authority & National Center for Mental Health (NCMH)',
  },
  {
    id: 'vawc-safe-spaces',
    title: 'Gender-Based Violence & Domestic Abuse',
    subtitle: 'From private shame to legal accountability',
    whatIsIt:
      'Physical, psychological, sexual, and economic abuse perpetrated disproportionately against women and LGBTQ+ persons within intimate partnerships and public spheres.',
    whyItMatters:
      'Violence strips survivors of dignity, livelihoods, and psychological safety. Culturally, domestic violence in the Philippines has often been trivialized as a private domestic dispute ("away-mag-asawa").',
    philippineContext:
      'According to the National Demographic and Health Survey (NDHS), 1 in 5 Filipinas aged 15-49 has experienced physical, sexual, or emotional violence by their husband or partner.',
    legalFrameworks: [
      'Anti-Violence Against Women and Their Children Act of 2004 (RA 9262)',
      'Safe Spaces Act / Bawal Bastos Law (RA 11313)',
      'Anti-Rape Law of 1997 (RA 8353)',
    ],
    verifiedFact:
      'Over 41,000 barangays have statutory Barangay VAW Desks, yet community audits show only 58% possess private intake rooms and trained female duty officers.',
    source: 'Philippine Commission on Women & DILG VAW Desk Audit',
  },
  {
    id: 'online-harassment',
    title: 'Digital Gender-Based Violence (DGBV)',
    subtitle: 'The modern weaponization of cyberspace',
    whatIsIt:
      'Non-consensual sharing of intimate images, deepfake sexualization, doxxing, cyber-stalking, and coordinated misogynistic troll swarms aimed at silencing women and queer individuals online.',
    whyItMatters:
      'As Filipinos rank among the highest worldwide in daily internet and social media usage, the online realm has become a primary staging ground for reputational destruction and psychological terror.',
    philippineContext:
      'Women journalists, youth activists, and queer creators face systematic harassment in Philippine comment sections, often weaponized with sexual slurs and threats of physical assault.',
    legalFrameworks: [
      'Safe Spaces Act (RA 11313) Section on Online Sexual Harassment',
      'Cybercrime Prevention Act of 2012 (RA 10175)',
      'Anti-Photo and Video Voyeurism Act (RA 9995)',
    ],
    verifiedFact:
      'A 2023 Plan International Philippines study revealed that 68% of young Filipinas surveyed experienced harassment on social platforms, prompting many to self-censor or deactivate accounts.',
    source: 'Plan International PH State of the World’s Girls Report',
  },
  {
    id: 'sogie-equality',
    title: 'SOGIESC Discrimination & The Pending Equality Bill',
    subtitle: '24 years in legislative limbo: Equality delayed',
    whatIsIt:
      'Systematic discrimination against lesbian, gay, bisexual, transgender, and queer Filipinos in employment, housing, healthcare, educational institutions, and public accommodations.',
    whyItMatters:
      'Despite the Philippines frequently ranking as "tolerant" in superficial surveys, tolerance is not equality. Without an overarching national non-discrimination law, LGBTQ+ Filipinos lack legal remedy when fired, denied medical care, or refused school admission.',
    philippineContext:
      'First filed in the year 2000 by the late Senator Miriam Defensor Santiago and Rep. Etta Rosales, the SOGIE Equality Bill remains one of the longest-pending legislative proposals in Philippine congressional history, repeatedly stalled by religious conservatism.',
    legalFrameworks: [
      'Local Anti-Discrimination Ordinances (Quezon City, Manila, Cebu, Davao, Zamboanga)',
      'Pending SOGIE Equality Bill (House Bill 7070 / Senate Bill 1600)',
    ],
    verifiedFact:
      'Over 25 major local government units have passed local anti-discrimination ordinances, but more than 75% of the Philippine population remains without statutory protection against SOGIESC discrimination.',
    source: 'Commission on Human Rights (CHR) Rainbow Report & Senate Legislative Archives',
  },
  {
    id: 'unpaid-care-work',
    title: 'The Invisible Care Economy',
    subtitle: 'Subsidizing national growth through uncounted labor',
    whatIsIt:
      'Cooking, cleaning, eldercare, child-rearing, and emotional labor performed almost exclusively by women without financial remuneration or social security recognition.',
    whyItMatters:
      'If unpaid care work were monetized, it would represent up to 20% of Philippine Gross Domestic Product. Its exclusion from national accounting keeps women economically dependent and time-poor.',
    philippineContext:
      'In typical low-income urban and rural Filipino households, adolescent girls are routinely pulled out of class to look after younger siblings while parents work, compounding generational gender gaps.',
    legalFrameworks: [
      'Magna Carta of Women (RA 9710) - Section 20 on Social Protection',
      'Philippine Development Plan (PDP) Chapters on Gender-Responsive Budgeting',
    ],
    verifiedFact:
      'The Philippine Institute for Development Studies (PIDS) estimates the monetary value of women’s unpaid care work in the Philippines at between 1.9 to 2.4 trillion pesos annually.',
    source: 'Philippine Institute for Development Studies (PIDS Research Paper Series)',
  },
  {
    id: 'ofw-feminization',
    title: 'The Feminization of Overseas Migration',
    subtitle: 'Exporting care while leaving children behind',
    whatIsIt:
      'The disproportionate number of Filipina migrant workers deployed as household service workers (HSWs), caregivers, and nurses across the Middle East, East Asia, and Western nations.',
    whyItMatters:
      'Remittances keep the macro-economy afloat, but at devastating personal costs: mother-child separation, vulnerability to abusive employers abroad, and isolation under restrictive foreign sponsorship systems (like Kafala).',
    philippineContext:
      'Over 60% of all deployed Overseas Filipino Workers (OFWs) categorized as newly hired domestic workers are women. Filipino children grow up navigating long-distance motherhood via video calls.',
    legalFrameworks: [
      'Migrant Workers and Overseas Filipinos Act of 1995 (RA 8042 as amended by RA 10022)',
      'Department of Migrant Workers (DMW) Act (RA 11641)',
      'ILO Convention 189 (Decent Work for Domestic Workers)',
    ],
    verifiedFact:
      'According to the PSA Survey on Overseas Filipinos, female OFWs comprised approximately 57.8% of the total 1.96 million overseas workers in 2022, with the majority concentrated in elementary occupations.',
    source: 'Philippine Statistics Authority (PSA) Survey on Overseas Filipinos',
  },
];

export const INITIAL_ARTICLES: EditorialArticle[] = [
  {
    id: 'art-1',
    title: 'Ang Muling Pagbangon ng Babaylan: Reclaiming the Autonomous Spirit',
    slug: 'muling-pagbangon-ng-babaylan',
    excerpt:
      'Exploring how pre-colonial spiritual leadership was silenced under colonial rule, and how modern Filipinas and queer scholars are reviving the Babaylan philosophy today.',
    author: 'De Dios, Sharah',
    authorRole: 'Archival Historian & Researcher',
    date: 'September 2026',
    readTime: '6 min read',
    category: 'History',
    coverImage: BABAYLAN_IMAGE,
    quoteHighlight:
      'Ang Babaylan ay hindi lamang relic ng lumipas; ito ay buhay na pilosopiya ng pakikipagkapwa, paghilom, at pagkilala sa lakas ng babae at queer sa lipunan.',
    content: [
      'Bago pa man dumating ang mga galyon ng Espanya sa ating mga baybayin noong 1521, mayroon nang maunlad at pantay na sibilisasyon sa kapuluan ng Pilipinas. Sa gitna ng ating mga komunidad ay hindi hari o pari, kundi ang Babaylan—mga babae at Asog (mga lalaking nagdadamit at namumuhay bilang babae) na nagsilbing tagapamagitan sa kalikasan, mga manggagamot, at tagapagtago ng kasaysayan.',
      'Nang ipataw ng mga mananakop ang kanilang sistemang patriyarkal, ang mga Babaylan ay pinaratangang mga "bruha" (mangkukulam) at "alagad ng demonyo." Winasak ang kanilang mga dambana at sapilitang ipinasok ang mga kababaihan sa loob ng tahanan at beaterio. Ang dating tagapamuno ng komunidad ay naging sunud-sunurang anino sa ilalim ng kapangyarihan ng kura at ng asawang lalaki.',
      'Ngunit hindi namatay ang apoy ng Babaylan. Sa kasalukuyan, makikita natin ang kanilang diwa sa mga kababaihang siyentipiko, mga lider-magsasaka, at mga tagapagtanggol ng karapatang pantao. Sa pagbabalik-tanaw sa ating kasaysayan, nauunawaan natin na ang pagkakapantay-pantay ng kasarian ay hindi dayuhang kaisipan—ito ay ating sariling pinagmulan na ninakaw lamang ng kolonisasyon.',
    ],
    status: 'published',
  },
  {
    id: 'art-2',
    title: 'The Myth of Maria Clara: Deconstructing the "Ideal" Filipina',
    slug: 'myth-of-maria-clara',
    excerpt:
      'Jose Rizal created Maria Clara as a tragic critique of colonial oppression, yet Philippine society turned her into an oppressive moral cage for generations of women.',
    author: 'Cabacang, Mary Faith',
    authorRole: 'Lead Sociological Analyst',
    date: 'September 2026',
    readTime: '7 min read',
    category: 'Culture',
    coverImage: CONTEMPORARY_IMAGE,
    quoteHighlight:
      'Maria Clara was never written to be a trophy of modesty; she was Rizal’s tragic witness to a society held hostage by clerical and patriarchal dominance.',
    content: [
      'For over a century, the phrase "parang Maria Clara" has been used in Philippine society as the ultimate praise for female virtue: soft-spoken, religious, obedient, modestly covered, and perpetually willing to endure suffering in silence. But a critical reading of Jose Rizal’s Noli Me Tangere reveals a starkly different reality.',
      'Rizal did not write Maria Clara to be a blueprint of ideal womanhood. She was an illegitimate child born of rape and clerical corruption, torn between her love and her religious vows, eventually driven into the convent where she was driven insane. She was a tragic symbol of a victimized motherland, not a celebratory ideal of passivity.',
      'When society canonized her as the standard for Filipino women, it effectively codified compliance. Women were told that assertiveness is unladylike, anger is scandalous, and sacrifice is the highest calling. Today, deconstructing the Maria Clara myth is vital to liberating Filipinas from unrealistic expectations of moral perfection.',
    ],
    status: 'published',
  },
  {
    id: 'art-3',
    title: 'Tutok Tatay: Evolving Masculinities and the Philippine Fatherhood Shift',
    slug: 'tutok-tatay-evolving-masculinity',
    excerpt:
      'Moving away from the distant "Padre de Pamilya" archetype toward affectionate, hands-on nurturing among contemporary millennial and Gen Z Filipino fathers.',
    author: 'Villanueve, Russell Athan',
    authorRole: 'Gender & Youth Researcher',
    date: 'September 2026',
    readTime: '5 min read',
    category: 'Family',
    coverImage: EDITORIAL_DESK_IMAGE,
    quoteHighlight:
      'True fatherhood is not marked by stoic silence or economic dominance; it is measured by presence, vulnerability, and shared domestic responsibility.',
    content: [
      'Growing up in traditional Filipino households, fathers were often characterized by their absence or their intimidating authority. The "Padre de Pamilya" was the disciplinarian who sat at the head of the table, whose presence commanded silence, and whose tears were never seen.',
      'This emotional distance came at a profound cost to Filipino men, reinforcing toxic ideas that vulnerability is weakness. Today, an inspiring counter-culture is blooming in the Philippines: "Tutok Tatay" (Hands-on Dads). Millennial and Gen Z fathers are changing diapers, preparing school baon, attending parent-teacher conferences, and showing affection without shame.',
      'This shift does not diminish masculinity; it enriches it. When fathers participate equally in childcare and domestic chores, they alleviate the double burden carried by mothers and raise children who view emotional expression as healthy human nature.',
    ],
    status: 'published',
  },
];

export const INITIAL_POSTS: ForumPost[] = [
  {
    id: 'post-1',
    title: 'Pwede bang umiyak ang lalaki nang hindi tinatawag na mahina?',
    author: 'Anonymous Kapwa',
    isAnonymous: true,
    category: 'Personal Experiences',
    content:
      'Buong buhay ko, ang turo sa akin ng tatay ko ay bawal umiyak ang lalaki dahil "nakakahiya sa kapitbahay." Ngayong 21 na ako at nag-aaral sa kolehiyo habang nagtatrabaho, madalas akong atakihin ng matinding anxiety. Noong sinubukan kong mag-open up sa mga kabarkada ko, tinawanan lang ako at sinabing "inom na lang natin yan, pare." Kailan ba magiging normal para sa aming mga lalaki ang maging tao?',
    createdAt: '2026-09-14T14:32:00.000Z',
    listeningCount: 42,
    reportCount: 0,
    replies: [
      {
        id: 'rep-1',
        author: 'Anonymous Ate',
        isAnonymous: true,
        content:
          'Valid ang nararamdaman mo. Ang pag-iyak ay biological response sa sakit at pagod, hindi kahinaan. Saludo ako sa tapang mo na aminin yan. Huwag mong kimkimin; may mga taong handang makinig nang walang panunukso.',
        createdAt: '2026-09-14T15:10:00.000Z',
      },
      {
        id: 'rep-2',
        author: 'Anonymous Peer',
        isAnonymous: true,
        content:
          'Salamat sa pagbabahagi nito, kapatid. Isa sa pinakamalaking suliranin ang toxic machismo na nagpapahirap sa mental health ng mga kalalakihan. Karapatan mong maging vulnerable at maghilom.',
        createdAt: '2026-09-14T16:05:00.000Z',
      },
    ],
  },
  {
    id: 'post-2',
    title: 'Bakit laging si Ate ang inaasahang magparaya sa gastusin ng pamilya?',
    author: 'Anonymous Panganay',
    isAnonymous: true,
    category: 'Family',
    content:
      'Bilang panganay na babae, ako ang naging breadwinner matapos mag-retire ng mga magulang ko. Pero napapansin ko, yung bunsong kapatid namin na lalaki, pinapayagang tumambay maghapon dahil "lalaki yan, mahirap pilitin." Samantalang ako, bawal magpahinga o mag-ipon para sa sarili kong buhay. Normal ba itong gendered burden sa ating mga pamilyang Pilipino?',
    createdAt: '2026-09-19T09:15:00.000Z',
    listeningCount: 56,
    reportCount: 0,
    replies: [
      {
        id: 'rep-3',
        author: 'Anonymous Kapwa',
        isAnonymous: true,
        content:
          'Napakakaraniwan nito sa ating kultura. Tawag dyan ay "Eldest Daughter Syndrome" na pinalala pa ng patriyarkal na pagpapalaki kung saan binubusog ang mga lalaki sa pribilehiyo habang sinasanay ang mga kababaihan sa sakripisyo. Magtakda ng boundaries; karapatan mong mabuhay para sa sarili mo.',
        createdAt: '2026-09-19T10:45:00.000Z',
      },
    ],
  },
];

export const CRISIS_RESOURCES: SupportResource[] = [
  {
    id: 'pnp-wcpc',
    organization: 'PNP Women and Children Protection Center (WCPC)',
    purpose: 'Specialized Philippine National Police command investigating and responding to crimes against women and children nationwide.',
    hotline: '(02) 8532-6690',
    secondaryContact: '0919-777-7377 (Mobile / SMS)',
    availability: '24/7 Nationwide Emergency Response',
    officialSource: 'Philippine National Police (PNP)',
    link: 'https://wcpc.pnp.gov.ph',
    tags: ['Violence Against Women', 'Physical Abuse', 'Emergency Intervention'],
  },
  {
    id: 'dswd-crisis',
    organization: 'DSWD Crisis Intervention Unit (CIU) & Hotline 1343',
    purpose: 'Immediate psychological counseling, legal aid referral, and emergency shelter assistance for human trafficking and gender-based violence survivors.',
    hotline: '1343 (Actionline Against Human Trafficking)',
    secondaryContact: '(02) 8931-8101 local 513',
    availability: '24/7 Toll-free Hotline',
    officialSource: 'Department of Social Welfare and Development (DSWD)',
    link: 'https://www.dswd.gov.ph',
    tags: ['Human Trafficking', 'Emergency Shelter', 'Financial Aid'],
  },
  {
    id: 'chr-gender',
    organization: 'Commission on Human Rights (CHR) Gender and Human Rights Center',
    purpose: 'Independent monitoring and investigation of gender-based discrimination, SOGIESC rights violations, and state abuse.',
    hotline: '0920-506-1194',
    secondaryContact: '0939-218-4726 (CHR Public Assistance)',
    availability: 'Mondays to Fridays, 8:00 AM – 5:00 PM',
    officialSource: 'Commission on Human Rights of the Philippines (CHR)',
    link: 'https://chr.gov.ph',
    tags: ['SOGIESC Discrimination', 'Human Rights Violation', 'Legal Investigation'],
  },
  {
    id: 'ncmh-crisis',
    organization: 'National Center for Mental Health (NCMH) Crisis Hotline',
    purpose: 'Free, confidential mental health psychological first aid, suicide prevention, and psychiatric counseling for individuals experiencing severe emotional distress.',
    hotline: '1553 (Toll-Free Nationwide Landline)',
    secondaryContact: '0917-899-USAP (8727) / 0966-351-4518',
    availability: '24/7 Free and Confidential Call Service',
    officialSource: 'Department of Health (DOH)',
    link: 'https://ncmh.gov.ph',
    tags: ['Mental Health', 'Anxiety & Depression', 'Suicide Prevention'],
  },
  {
    id: 'lunas-collective',
    organization: 'Lunas Collective (Feminist Online Helpline)',
    purpose: 'A volunteer-driven, trauma-informed feminist chat helpline providing inclusive, judgment-free peer support for GBV survivors and reproductive health concerns.',
    hotline: 'Direct Messenger via m.me/LunasCollective',
    availability: 'Scheduled Shifts (View Facebook page for daily online schedules)',
    officialSource: 'Lunas Collective Community Initiative',
    link: 'https://www.facebook.com/LunasCollective',
    tags: ['Peer Counseling', 'Reproductive Health', 'Safe Chat Space'],
  },
  {
    id: 'loveyourself',
    organization: 'LoveYourself Philippines',
    purpose: 'Community-led non-profit providing free and confidential sexual health screening, HIV testing, transition counseling, and mental wellness for the LGBTQ+ community.',
    hotline: '(02) 8696-0150',
    secondaryContact: '0917-860-7041 (LoveYourself Hubs)',
    availability: 'Tuesdays to Saturdays, 10:00 AM – 7:00 PM',
    officialSource: 'LoveYourself Organization',
    link: 'https://loveyourself.ph',
    tags: ['LGBTQ+ Healthcare', 'Mental Wellness', 'Sexual Health'],
  },
];

export const RESEARCH_TEAM: TeamMember[] = [
  {
    name: 'Cabacang, Mary Faith',
    role: 'Lead Sociological Analyst',
    focusArea: 'Deconstruction of the Maria Clara Archetype & Modern Media Representations',
    reflection:
      'Investigating how Victorian and Spanish religious codes were superimposed onto Filipinas opened my eyes to why our grandmothers and mothers bore so much silent pain. Silungan is our way of dismantling that silence.',
  },
  {
    name: 'Comonical, Kate',
    role: 'Community & Advocacy Specialist',
    focusArea: 'Grassroots Gender Dynamics, SOGIE Advocacy, & Rural LGBTQ+ Experiences',
    reflection:
      'True inclusivity cannot remain confined within academic halls or metropolitan coffee shops. Hearing the lived realities of rural queer youth revealed why empathy and legislative protection must go hand-in-hand.',
  },
  {
    name: 'De Dios, Sharah',
    role: 'Archival Historian & Lead Writer',
    focusArea: 'Pre-Colonial Babaylan Traditions & Colonial Institutional Changes',
    reflection:
      'Finding out that our pre-colonial ancestors celebrated gender-fluid spiritual leaders was liberating. Equality is not something the Philippines has to borrow from the West; it is something we need to remember.',
  },
  {
    name: 'Laudiana, Mary Annjellyn',
    role: 'Labor & Economics Researcher',
    focusArea: 'Unpaid Domestic Care Deficit & Feminization of Overseas Filipino Workers (OFWs)',
    reflection:
      'When you calculate the trillions of pesos in uncompensated care that Filipino mothers provide every day, you realize our entire national economy stands on the unpaid shoulders of women.',
  },
  {
    name: 'Rellita, Katelyn',
    role: 'Editorial Director & Synthesizer',
    focusArea: 'Digital Safe Spaces, Community Moderation, & Project Synthesis',
    reflection:
      'SILUNGAN PH was built on the premise that listening is an active, radical virtue. Providing a shelter where people can speak their truth without fear of ridicule is the heartbeat of our research.',
  },
  {
    name: 'Villanueve, Russell Athan',
    role: 'Gender & Youth Researcher',
    focusArea: 'Evolving Masculinities, Toxic Machismo, & Men’s Mental Health in the Philippines',
    reflection:
      'Challenging machismo does not hurt men; it saves us. Being taught that tears make you less of a man has ruined countless lives. We need a Philippine culture where men can heal and love openly.',
  },
];

export const ACADEMIC_REFERENCES: ReferenceEntry[] = [
  {
    category: 'Journal Articles',
    citation:
      'Hega, M. D., Alporha, V. C., & Evangelista, M. S. (2017). Feminism and the Women’s Movement in the Philippines: Struggles, Advances, and Challenges. Friedrich-Ebert-Stiftung Philippines Office.',
    annotation:
      'Surveys the historical trajectory of organized feminism in the Philippines from early suffrage societies to contemporary intersectional coalitions.',
  },
  {
    category: 'Journal Articles',
    citation:
      'Ofreneo, M. A. P. (2013). De-centering heteronormativity: A feminist poststructuralist analysis of the experiences of Filipino lesbians. Philippine Journal of Psychology, 46(2), 1-27.',
    annotation:
      'Examines sexual and gender identity formation within deeply religious Catholic family structures in the Philippines.',
  },
  {
    category: 'Journal Articles',
    citation:
      'Aguilar, D. D. (1988). The Feminist Challenge: Initial Working Principles for Philippine Women’s Studies. Asian Center, University of the Philippines Diliman.',
    annotation:
      'Establishes theoretical boundaries for studying gender in relation to Philippine class dynamics and national sovereignty.',
  },
  {
    category: 'Government Sources',
    citation:
      'Republic of the Philippines. (2009). Republic Act No. 9710: The Magna Carta of Women. Official Gazette of the Republic of the Philippines.',
    annotation:
      'Comprehensive national human rights law that seeks to eliminate discrimination through the recognition, protection, and fulfillment of rights for Filipino women.',
  },
  {
    category: 'Government Sources',
    citation:
      'Republic of the Philippines. (2019). Republic Act No. 11313: The Safe Spaces Act (Bawal Bastos Law). Official Gazette of the Republic of the Philippines.',
    annotation:
      'Landmark penal legislation defining and penalizing gender-based sexual harassment in streets, public spaces, workplaces, educational institutions, and online.',
  },
  {
    category: 'Government Sources',
    citation:
      'Republic of the Philippines. (2004). Republic Act No. 9262: Anti-Violence Against Women and Their Children Act of 2004. Official Gazette.',
    annotation:
      'Foundational penal law addressing intimate partner violence, recognizing economic abuse and emotional trauma alongside physical assault.',
  },
  {
    category: 'Government Sources',
    citation:
      'Philippine Statistics Authority (PSA). (2024). Labor Force Survey (LFS): Sex-Disaggregated Tables on Employment Status, Occupation, and Industry. Manila: PSA.',
    annotation:
      'Official national statistical survey providing empirical sex-disaggregated data on labor force participation rates, employment categories, and occupational segregation in the Philippines.',
  },
  {
    category: 'Government Sources',
    citation:
      'Philippine Commission on Women (PCW). (2023). Women and Men in the Philippines: Statistical Handbook 2023. Manila: PCW.',
    annotation:
      'Authoritative statistical compilation detailing Philippine labor participation rates, maternal health indices, and local political representation.',
  },
  {
    category: 'Credible Websites',
    citation:
      'University of the Philippines Center for Women’s and Gender Studies (UP CWGS). Resource Archives & Academic Publications. https://cws.upd.edu.ph',
    annotation:
      'Institutional academic repository for contemporary peer-reviewed research on Philippine gender studies, SOGIESC rights, and feminist pedagogy.',
  },
  {
    category: 'Credible Websites',
    citation:
      'Ateneo Gender Hub. Ateneo de Manila University. https://www.ateneo.edu/gender-hub',
    annotation:
      'Institutional portal offering protocols, educational toolkits, and case studies on gender-fair environments in higher education institutions.',
  },
  {
    category: 'Multimedia',
    citation:
      'Araullo, K. [Kirby Araullo]. (2020). The Babaylan – Badass Priestess of the Philippines! [Video]. YouTube. https://youtu.be/DDCmfbBy464',
    annotation:
      'Filipino historian and educator Kirby Araullo explores who the Babaylan were, their status in society, gender and transgender Babaylan, their decline during colonization, and their presence today. Features an extensive curated bibliography of historical and anthropological readings.',
  },
];
