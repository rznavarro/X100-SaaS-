/**
 * Software catalog for X100 SaaS platform
 * Updated on 2025-11-09
 */
export interface Software {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  url: string;
}

export const softwareCatalog: Software[] = [
  // SALUD
  {
    id: "1",
    nombre: "Dental Simple",
    descripcion: "Agenda de pacientes y fichas clínicas para consultorios dentales.",
    categoria: "SALUD",
    url: "https://dentalsimple.vercel.app/"
  },
  {
    id: "2",
    nombre: "FisioTrack",
    descripcion: "Registro de pacientes, sesiones y evolución de tratamientos de fisioterapia.",
    categoria: "SALUD",
    url: "https://fisiotrack.vercel.app/dashboard"
  },
  {
    id: "3",
    nombre: "PsyNotes",
    descripcion: "Gestión de citas y notas de sesión para psicólogos y terapeutas.",
    categoria: "SALUD",
    url: "https://example.com/psynotes"
  },
  {
    id: "4",
    nombre: "VetRecord",
    descripcion: "Historiales de mascotas, vacunas y citas para clínicas veterinarias.",
    categoria: "SALUD",
    url: "https://example.com/vetrecord"
  },
  {
    id: "5",
    nombre: "OpticaFlow",
    descripcion: "Control de clientes, graduaciones y ventas de lentes.",
    categoria: "SALUD",
    url: "https://example.com/opticaflow"
  },
  {
    id: "6",
    nombre: "NutriPlan",
    descripcion: "Planes alimenticios, seguimiento de pacientes y mediciones para nutricionistas.",
    categoria: "SALUD",
    url: "https://example.com/nutriplan"
  },
  {
    id: "7",
    nombre: "LabTracker",
    descripcion: "Registro de muestras, resultados y pacientes para laboratorios clínicos.",
    categoria: "SALUD",
    url: "https://example.com/labtracker"
  },
  {
    id: "8",
    nombre: "PharmaDash",
    descripcion: "Control de inventario y ventas básicas para farmacias pequeñas.",
    categoria: "SALUD",
    url: "https://example.com/pharmadash"
  },
  {
    id: "9",
    nombre: "QuiroLog",
    descripcion: "Registro de pacientes y ajustes para quiroprácticos.",
    categoria: "SALUD",
    url: "https://example.com/quirolog"
  },
  {
    id: "10",
    nombre: "PodiatryBase",
    descripcion: "Fichas de pacientes y tratamientos para podólogos.",
    categoria: "SALUD",
    url: "https://example.com/podiatrybase"
  },

  // INMOBILIARIA
  {
    id: "11",
    nombre: "LeaseDash",
    descripcion: "Seguimiento de contratos, inquilinos y pagos para inmobiliaria comercial.",
    categoria: "INMOBILIARIA",
    url: "https://example.com/leasedash"
  },
  {
    id: "12",
    nombre: "PropertyLog",
    descripcion: "Administración de propiedades, mantenimiento y comunicación con inquilinos.",
    categoria: "INMOBILIARIA",
    url: "https://example.com/propertylog"
  },
  {
    id: "13",
    nombre: "BrokerList",
    descripcion: "Lista de propiedades, clientes y seguimiento de visitas para brokers.",
    categoria: "INMOBILIARIA",
    url: "https://example.com/brokerlist"
  },
  {
    id: "14",
    nombre: "CondoAdmin",
    descripcion: "Gestión de condominios, cuotas y comunicados a residentes.",
    categoria: "INMOBILIARIA",
    url: "https://example.com/condoadmin"
  },
  {
    id: "15",
    nombre: "RentTracker",
    descripcion: "Control simple de rentas, fechas de pago y propiedades.",
    categoria: "INMOBILIARIA",
    url: "https://example.com/renttracker"
  },
  {
    id: "16",
    nombre: "ShowingScheduler",
    descripcion: "Calendario de visitas a propiedades y seguimiento de prospectos.",
    categoria: "INMOBILIARIA",
    url: "https://example.com/showingscheduler"
  },
  {
    id: "17",
    nombre: "LeaseBuilder",
    descripcion: "Generador de contratos de arrendamiento con plantillas básicas.",
    categoria: "INMOBILIARIA",
    url: "https://example.com/leasebuilder"
  },
  {
    id: "18",
    nombre: "TenantScreen",
    descripcion: "Registro y evaluación básica de potenciales inquilinos.",
    categoria: "INMOBILIARIA",
    url: "https://example.com/tenantscreen"
  },

  // SERVICIOS PROFESIONALES
  {
    id: "19",
    nombre: "LegalCases",
    descripcion: "Seguimiento de casos, clientes y fechas importantes para abogados independientes.",
    categoria: "SERVICIOS PROFESIONALES",
    url: "https://example.com/legalcases"
  },
  {
    id: "20",
    nombre: "TaxClientHub",
    descripcion: "Gestión de clientes y documentos para contadores y preparadores de impuestos.",
    categoria: "SERVICIOS PROFESIONALES",
    url: "https://example.com/taxclienthub"
  },
  {
    id: "21",
    nombre: "ConsultTrack",
    descripcion: "Proyectos, clientes y horas trabajadas para consultores.",
    categoria: "SERVICIOS PROFESIONALES",
    url: "https://example.com/consulttrack"
  },
  {
    id: "22",
    nombre: "ArchProject",
    descripcion: "Seguimiento de proyectos arquitectónicos y comunicación con clientes.",
    categoria: "SERVICIOS PROFESIONALES",
    url: "https://example.com/archproject"
  },
  {
    id: "23",
    nombre: "EngineerLog",
    descripcion: "Registro de proyectos de ingeniería, inspecciones y reportes.",
    categoria: "SERVICIOS PROFESIONALES",
    url: "https://example.com/engineerlog"
  },
  {
    id: "24",
    nombre: "AuditFlow",
    descripcion: "Checklists y documentación para auditorías.",
    categoria: "SERVICIOS PROFESIONALES",
    url: "https://example.com/auditflow"
  },
  {
    id: "25",
    nombre: "TranslateHub",
    descripcion: "Gestión de proyectos de traducción, clientes y tarifas.",
    categoria: "SERVICIOS PROFESIONALES",
    url: "https://example.com/translatehub"
  },
  {
    id: "26",
    nombre: "DesignQueue",
    descripcion: "Lista de proyectos de diseño gráfico y entregas para freelancers.",
    categoria: "SERVICIOS PROFESIONALES",
    url: "https://example.com/designqueue"
  },
  {
    id: "27",
    nombre: "CopyBoard",
    descripcion: "Proyectos de copywriting, clientes y versiones de textos.",
    categoria: "SERVICIOS PROFESIONALES",
    url: "https://example.com/copyboard"
  },
  {
    id: "28",
    nombre: "NotaryLog",
    descripcion: "Registro de notarizaciones y clientes para notarios.",
    categoria: "SERVICIOS PROFESIONALES",
    url: "https://example.com/notarylog"
  },

  // SERVICIOS CREATIVOS
  {
    id: "29",
    nombre: "PhotoBooker",
    descripcion: "Calendario de sesiones fotográficas y entrega de fotos a clientes.",
    categoria: "SERVICIOS CREATIVOS",
    url: "https://example.com/photobooker"
  },
  {
    id: "30",
    nombre: "VideoQueue",
    descripcion: "Proyectos de edición de video, clientes y entregas.",
    categoria: "SERVICIOS CREATIVOS",
    url: "https://example.com/videoqueue"
  },
  {
    id: "31",
    nombre: "StudioScheduler",
    descripcion: "Reservas de estudio de grabación o fotografía por hora.",
    categoria: "SERVICIOS CREATIVOS",
    url: "https://example.com/studioscheduler"
  },
  {
    id: "32",
    nombre: "EventPlanList",
    descripcion: "Eventos, proveedores y checklist para planificadores de eventos.",
    categoria: "SERVICIOS CREATIVOS",
    url: "https://example.com/eventplanlist"
  },
  {
    id: "33",
    nombre: "MusicLessons",
    descripcion: "Agenda de clases de música y seguimiento de alumnos.",
    categoria: "SERVICIOS CREATIVOS",
    url: "https://example.com/musiclessons"
  },
  {
    id: "34",
    nombre: "ArtCommissions",
    descripcion: "Seguimiento de comisiones artísticas y comunicación con clientes.",
    categoria: "SERVICIOS CREATIVOS",
    url: "https://example.com/artcommissions"
  },

  // BELLEZA Y BIENESTAR
  {
    id: "35",
    nombre: "SalonBook",
    descripcion: "Agenda de citas para salones de belleza y estilistas.",
    categoria: "BELLEZA Y BIENESTAR",
    url: "https://example.com/salonbook"
  },
  {
    id: "36",
    nombre: "BarbershopQ",
    descripcion: "Turnos y clientes para barberías.",
    categoria: "BELLEZA Y BIENESTAR",
    url: "https://example.com/barbershopq"
  },
  {
    id: "37",
    nombre: "NailAgenda",
    descripcion: "Calendario de citas para técnicas de uñas.",
    categoria: "BELLEZA Y BIENESTAR",
    url: "https://example.com/nailagenda"
  },
  {
    id: "38",
    nombre: "SpaScheduler",
    descripcion: "Reservas de tratamientos y terapeutas para spas pequeños.",
    categoria: "BELLEZA Y BIENESTAR",
    url: "https://example.com/spascheduler"
  },
  {
    id: "39",
    nombre: "MassageLog",
    descripcion: "Agenda de masajes y fichas de clientes para masajistas.",
    categoria: "BELLEZA Y BIENESTAR",
    url: "https://example.com/massagelog"
  },
  {
    id: "40",
    nombre: "YogaClassTracker",
    descripcion: "Registro de clases, alumnos y asistencia para instructores de yoga.",
    categoria: "BELLEZA Y BIENESTAR",
    url: "https://example.com/yogaclasstracker"
  },
  {
    id: "41",
    nombre: "PersonalTrainerHub",
    descripcion: "Clientes, rutinas y seguimiento de progreso para entrenadores personales.",
    categoria: "BELLEZA Y BIENESTAR",
    url: "https://example.com/personaltrainerhub"
  },
  {
    id: "42",
    nombre: "DietCoachBoard",
    descripcion: "Planes alimenticios y seguimiento de clientes para coaches nutricionales.",
    categoria: "BELLEZA Y BIENESTAR",
    url: "https://example.com/dietcoachboard"
  },

  // SERVICIOS DOMÉSTICOS
  {
    id: "43",
    nombre: "PlumberJobs",
    descripcion: "Lista de trabajos, clientes y materiales para plomeros.",
    categoria: "SERVICIOS DOMÉSTICOS",
    url: "https://example.com/plumberjobs"
  },
  {
    id: "44",
    nombre: "ElectricianLog",
    descripcion: "Trabajos eléctricos, clientes y presupuestos.",
    categoria: "SERVICIOS DOMÉSTICOS",
    url: "https://example.com/electricianlog"
  },
  {
    id: "45",
    nombre: "CleaningRoutes",
    descripcion: "Rutas de limpieza, clientes y facturación para servicios de limpieza.",
    categoria: "SERVICIOS DOMÉSTICOS",
    url: "https://example.com/cleaningroutes"
  },
  {
    id: "46",
    nombre: "GardenSchedule",
    descripcion: "Calendario de mantenimiento de jardines y clientes.",
    categoria: "SERVICIOS DOMÉSTICOS",
    url: "https://example.com/gardenschedule"
  },
  {
    id: "47",
    nombre: "PestControlLog",
    descripcion: "Servicios, químicos utilizados y seguimiento para control de plagas.",
    categoria: "SERVICIOS DOMÉSTICOS",
    url: "https://example.com/pestcontrollog"
  },
  {
    id: "48",
    nombre: "HandymanQueue",
    descripcion: "Lista de reparaciones pendientes y clientes.",
    categoria: "SERVICIOS DOMÉSTICOS",
    url: "https://example.com/handymanqueue"
  },
  {
    id: "49",
    nombre: "PaintJobTracker",
    descripcion: "Proyectos de pintura, materiales y avance.",
    categoria: "SERVICIOS DOMÉSTICOS",
    url: "https://example.com/paintjobtracker"
  },
  {
    id: "50",
    nombre: "LocksmithCalls",
    descripcion: "Registro de servicios de cerrajería y ubicaciones.",
    categoria: "SERVICIOS DOMÉSTICOS",
    url: "https://example.com/locksmithcalls"
  },

  // SERVICIOS AUTOMOTRICES
  {
    id: "51",
    nombre: "MechanicShop",
    descripcion: "Órdenes de trabajo, vehículos y repuestos para talleres mecánicos.",
    categoria: "SERVICIOS AUTOMOTRICES",
    url: "https://example.com/mechanicshop"
  },
  {
    id: "52",
    nombre: "CarWashQueue",
    descripcion: "Turnos y servicios para lavados de autos.",
    categoria: "SERVICIOS AUTOMOTRICES",
    url: "https://example.com/carwashqueue"
  },
  {
    id: "53",
    nombre: "TireShopLog",
    descripcion: "Cambios de neumáticos, clientes y stock básico.",
    categoria: "SERVICIOS AUTOMOTRICES",
    url: "https://example.com/tireshoplog"
  },
  {
    id: "54",
    nombre: "AutoDetailList",
    descripcion: "Agenda de servicios de detailing automotriz.",
    categoria: "SERVICIOS AUTOMOTRICES",
    url: "https://example.com/autodetaillist"
  },
  {
    id: "55",
    nombre: "TowTruckDispatch",
    descripcion: "Registro de servicios de grúa y ubicaciones.",
    categoria: "SERVICIOS AUTOMOTRICES",
    url: "https://example.com/towtruckdispatch"
  },
  {
    id: "56",
    nombre: "OilChangeTracker",
    descripcion: "Control de cambios de aceite y recordatorios a clientes.",
    categoria: "SERVICIOS AUTOMOTRICES",
    url: "https://example.com/oilchangetracker"
  },

  // SERVICIOS DE ALIMENTACIÓN
  {
    id: "57",
    nombre: "CateringOrders",
    descripcion: "Eventos de catering, menús y entregas.",
    categoria: "SERVICIOS DE ALIMENTACIÓN",
    url: "https://example.com/cateringorders"
  },
  {
    id: "58",
    nombre: "PersonalChefCalendar",
    descripcion: "Agenda de comidas preparadas y clientes.",
    categoria: "SERVICIOS DE ALIMENTACIÓN",
    url: "https://example.com/personalchefcalendar"
  },
  {
    id: "59",
    nombre: "BakeryOrders",
    descripcion: "Pedidos de pastelería, entregas y recetas básicas.",
    categoria: "SERVICIOS DE ALIMENTACIÓN",
    url: "https://example.com/bakeryorders"
  },
  {
    id: "60",
    nombre: "MealPrepSchedule",
    descripcion: "Planificación semanal de meal prep y clientes.",
    categoria: "SERVICIOS DE ALIMENTACIÓN",
    url: "https://example.com/mealprepschedule"
  },
  {
    id: "61",
    nombre: "FoodTruckLog",
    descripcion: "Ubicaciones, ventas diarias y menú para food trucks.",
    categoria: "SERVICIOS DE ALIMENTACIÓN",
    url: "https://example.com/foodtrucklog"
  },
  {
    id: "62",
    nombre: "CoffeeShopDaily",
    descripcion: "Registro diario de ventas y productos para cafeterías pequeñas.",
    categoria: "SERVICIOS DE ALIMENTACIÓN",
    url: "https://example.com/coffeeshopdaily"
  },

  // EDUCACIÓN Y TUTORÍA
  {
    id: "63",
    nombre: "TutorScheduler",
    descripcion: "Clases particulares, alumnos y pagos para tutores.",
    categoria: "EDUCACIÓN Y TUTORÍA",
    url: "https://example.com/tutorscheduler"
  },
  {
    id: "64",
    nombre: "MusicTeacherLog",
    descripcion: "Lecciones de música y progreso de estudiantes.",
    categoria: "EDUCACIÓN Y TUTORÍA",
    url: "https://example.com/musicteacherlog"
  },
  {
    id: "65",
    nombre: "LanguageLessons",
    descripcion: "Clases de idiomas y seguimiento de alumnos.",
    categoria: "EDUCACIÓN Y TUTORÍA",
    url: "https://example.com/languagelessons"
  },
  {
    id: "66",
    nombre: "DrivingSchoolCalendar",
    descripcion: "Clases de manejo, alumnos y vehículos.",
    categoria: "EDUCACIÓN Y TUTORÍA",
    url: "https://example.com/drivingschoolcalendar"
  },
  {
    id: "67",
    nombre: "DanceClassTracker",
    descripcion: "Registro de clases de baile y asistencia.",
    categoria: "EDUCACIÓN Y TUTORÍA",
    url: "https://example.com/danceclasstracker"
  },
  {
    id: "68",
    nombre: "TestPrepSchedule",
    descripcion: "Sesiones de preparación para exámenes y material.",
    categoria: "EDUCACIÓN Y TUTORÍA",
    url: "https://example.com/testprepschedule"
  },

  // SERVICIOS PARA MASCOTAS
  {
    id: "69",
    nombre: "DogWalkerRoutes",
    descripcion: "Rutas de paseo de perros y clientes.",
    categoria: "SERVICIOS PARA MASCOTAS",
    url: "https://example.com/dogwalkerroutes"
  },
  {
    id: "70",
    nombre: "PetGroomingBook",
    descripcion: "Agenda de grooming y fichas de mascotas.",
    categoria: "SERVICIOS PARA MASCOTAS",
    url: "https://example.com/petgroomingbook"
  },
  {
    id: "71",
    nombre: "PetSitterCalendar",
    descripcion: "Calendario de cuidado de mascotas y clientes.",
    categoria: "SERVICIOS PARA MASCOTAS",
    url: "https://example.com/petsittercalendar"
  },
  {
    id: "72",
    nombre: "DogTrainingLog",
    descripcion: "Sesiones de entrenamiento canino y progreso.",
    categoria: "SERVICIOS PARA MASCOTAS",
    url: "https://example.com/dogtraininglog"
  },
  {
    id: "73",
    nombre: "PetTaxiSchedule",
    descripcion: "Transporte de mascotas y reservas.",
    categoria: "SERVICIOS PARA MASCOTAS",
    url: "https://example.com/pettaxischedule"
  },

  // FITNESS Y DEPORTES
  {
    id: "74",
    nombre: "GymMemberTracker",
    descripcion: "Membresías, pagos y acceso para gimnasios boutique.",
    categoria: "FITNESS Y DEPORTES",
    url: "https://example.com/gymmembertracker"
  },
  {
    id: "75",
    nombre: "BoxingClassLog",
    descripcion: "Clases de boxeo y asistencia de alumnos.",
    categoria: "FITNESS Y DEPORTES",
    url: "https://example.com/boxingclasslog"
  },
  {
    id: "76",
    nombre: "CrossFitBoard",
    descripcion: "WODs, atletas y resultados para boxes de CrossFit.",
    categoria: "FITNESS Y DEPORTES",
    url: "https://example.com/crossfitboard"
  },
  {
    id: "77",
    nombre: "PilatesScheduler",
    descripcion: "Clases de pilates y reservas.",
    categoria: "FITNESS Y DEPORTES",
    url: "https://example.com/pilatesscheduler"
  },
  {
    id: "78",
    nombre: "SwimLessonTracker",
    descripcion: "Lecciones de natación y niveles de alumnos.",
    categoria: "FITNESS Y DEPORTES",
    url: "https://example.com/swimlessontracker"
  },
  {
    id: "79",
    nombre: "MartialArtsLog",
    descripcion: "Clases de artes marciales, cinturones y progreso.",
    categoria: "FITNESS Y DEPORTES",
    url: "https://example.com/martialartslog"
  },

  // OFICIOS Y CONSTRUCCIÓN
  {
    id: "80",
    nombre: "CarpentryJobs",
    descripcion: "Proyectos de carpintería, materiales y clientes.",
    categoria: "OFICIOS Y CONSTRUCCIÓN",
    url: "https://example.com/carpentryjobs"
  },
  {
    id: "81",
    nombre: "RoofingEstimates",
    descripcion: "Presupuestos y trabajos de techado.",
    categoria: "OFICIOS Y CONSTRUCCIÓN",
    url: "https://example.com/roofingestimates"
  },
  {
    id: "82",
    nombre: "DrywallerLog",
    descripcion: "Trabajos de drywall, mediciones y materiales.",
    categoria: "OFICIOS Y CONSTRUCCIÓN",
    url: "https://example.com/drywallerlog"
  },
  {
    id: "83",
    nombre: "TileJobTracker",
    descripcion: "Instalaciones de azulejos y proyectos.",
    categoria: "OFICIOS Y CONSTRUCCIÓN",
    url: "https://example.com/tilejobtracker"
  },
  {
    id: "84",
    nombre: "WeldingJobs",
    descripcion: "Trabajos de soldadura y especificaciones.",
    categoria: "OFICIOS Y CONSTRUCCIÓN",
    url: "https://example.com/weldingjobs"
  },
  {
    id: "85",
    nombre: "HVACServiceLog",
    descripcion: "Servicios de HVAC, equipos y mantenimientos.",
    categoria: "OFICIOS Y CONSTRUCCIÓN",
    url: "https://example.com/hvacservicelog"
  },

  // SERVICIOS TECNOLÓGICOS
  {
    id: "86",
    nombre: "PhoneRepairQueue",
    descripcion: "Reparaciones de celulares y clientes.",
    categoria: "SERVICIOS TECNOLÓGICOS",
    url: "https://example.com/phonerepairqueue"
  },
  {
    id: "87",
    nombre: "ITSupportTickets",
    descripcion: "Tickets de soporte técnico para freelancers IT.",
    categoria: "SERVICIOS TECNOLÓGICOS",
    url: "https://example.com/itsupporttickets"
  },
  {
    id: "88",
    nombre: "WebDevProjects",
    descripcion: "Proyectos de desarrollo web y entregas.",
    categoria: "SERVICIOS TECNOLÓGICOS",
    url: "https://example.com/webdevprojects"
  },
  {
    id: "89",
    nombre: "SocialMediaCalendar",
    descripcion: "Calendario de publicaciones para community managers freelance.",
    categoria: "SERVICIOS TECNOLÓGICOS",
    url: "https://example.com/socialmediacalendar"
  },
  {
    id: "90",
    nombre: "SEOClientTracker",
    descripcion: "Clientes de SEO, keywords y reportes mensuales.",
    categoria: "SERVICIOS TECNOLÓGICOS",
    url: "https://example.com/seoclienttracker"
  },

  // VENTA AL POR MENOR E INVENTARIO
  {
    id: "91",
    nombre: "ShopInventory",
    descripcion: "Inventario simple para tiendas pequeñas.",
    categoria: "VENTA AL POR MENOR E INVENTARIO",
    url: "https://example.com/shopinventory"
  },
  {
    id: "92",
    nombre: "BoutiqueStock",
    descripcion: "Control de prendas y tallas para boutiques.",
    categoria: "VENTA AL POR MENOR E INVENTARIO",
    url: "https://example.com/boutiquestock"
  },
  {
    id: "93",
    nombre: "ThriftStoreLog",
    descripcion: "Registro de artículos de segunda mano y precios.",
    categoria: "VENTA AL POR MENOR E INVENTARIO",
    url: "https://example.com/thriftstorelog"
  },
  {
    id: "94",
    nombre: "BookstoreInventory",
    descripcion: "Libros en stock y ventas para librerías independientes.",
    categoria: "VENTA AL POR MENOR E INVENTARIO",
    url: "https://example.com/bookstoreinventory"
  },
  {
    id: "95",
    nombre: "CraftSupplyTracker",
    descripcion: "Materiales de manualidades y stock para tiendas craft.",
    categoria: "VENTA AL POR MENOR E INVENTARIO",
    url: "https://example.com/craftsupplytracker"
  },

  // MISCELÁNEOS
  {
    id: "96",
    nombre: "EventTicketTracker",
    descripcion: "Venta de boletos para eventos pequeños.",
    categoria: "MISCELÁNEOS",
    url: "https://example.com/eventtickettracker"
  },
  {
    id: "97",
    nombre: "EquipmentRentalLog",
    descripcion: "Alquiler de equipos, disponibilidad y reservas.",
    categoria: "MISCELÁNEOS",
    url: "https://example.com/equipmentrentallog"
  },
  {
    id: "98",
    nombre: "StorageUnitManager",
    descripcion: "Unidades de almacenamiento, inquilinos y pagos.",
    categoria: "MISCELÁNEOS",
    url: "https://example.com/storageunitmanager"
  },
  {
    id: "99",
    nombre: "LaundryRouteTracker",
    descripcion: "Rutas de servicio de lavandería y clientes.",
    categoria: "MISCELÁNEOS",
    url: "https://example.com/laundryroutetracker"
  },
  {
    id: "100",
    nombre: "VendingMachineLog",
    descripcion: "Ubicaciones de máquinas expendedoras, reposición y ventas.",
    categoria: "MISCELÁNEOS",
    url: "https://example.com/vendingmachinelog"
  }
];

export const categories = [
  'SALUD',
  'INMOBILIARIA',
  'SERVICIOS PROFESIONALES',
  'SERVICIOS CREATIVOS',
  'BELLEZA Y BIENESTAR',
  'SERVICIOS DOMÉSTICOS',
  'SERVICIOS AUTOMOTRICES',
  'SERVICIOS DE ALIMENTACIÓN',
  'EDUCACIÓN Y TUTORÍA',
  'SERVICIOS PARA MASCOTAS',
  'FITNESS Y DEPORTES',
  'OFICIOS Y CONSTRUCCIÓN',
  'SERVICIOS TECNOLÓGICOS',
  'VENTA AL POR MENOR E INVENTARIO',
  'MISCELÁNEOS',
];