// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  characters: {
    spreadsheetId: '1uq18UwoEeVS-PrrRyjXuBGx7y0D8anECSH-mX6gAduo',
    worksheetId: 1,
  },
  firebaseConfig: {
    apiKey: 'AIzaSyAlAPUXjpBlZY2WwatG1k6LOuAlGACD9gY',
    authDomain: 'classroom-rds.firebaseapp.com',
    databaseURL: 'https://classroom-rds-default-rtdb.firebaseio.com',
    projectId: 'classroom-rds',
    storageBucket: 'classroom-rds.appspot.com',
    messagingSenderId: '667520930692',
    appId: '1:667520930692:web:d235ece7ae0128a13383d1',
    measurementId: 'G-203FPT1WXQ'
  },
  gapiClientConfig: {
    client_id: '667520930692-rc4oojvic7pog105i5todq0fb5pvntep.apps.googleusercontent.com',
    discoveryDocs: [
      'https://classroom.googleapis.com/$discovery/rest?version=v1',
      'https://admin.googleapis.com/$discovery/rest?version=directory_v1'
    ],
    scope: [
      'openid',
      'email',
      'profile'
    ].join(' '),
    classroomScopes: [
      // Administrar tus clases de Google Classroom
      'https://www.googleapis.com/auth/classroom.courses',
      // Ver tus clases de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.courses.readonly',
      // Ver los tutores de estudiantes de tus clases de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',
      // Ver y administrar los tutores de estudiantes de tus clases de Google Classroom
      'https://www.googleapis.com/auth/classroom.guardianlinks.students',
      // Administrar las listas de tus clases de Google Classroom
      'https://www.googleapis.com/auth/classroom.rosters',
      // Ver las listas de tus clases de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.rosters.readonly',
      // Ver las direcciones de correo electrónico de las personas de tus clases
      'https://www.googleapis.com/auth/classroom.profile.emails',
      // Ver las fotos de perfil de las personas de tus clases
      'https://www.googleapis.com/auth/classroom.profile.photos',
      // Ver tus tutores de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly',
      // Administrar el trabajo del curso y las calificaciones de los estudiantes
      // en las clases de Google Classroom que impartes; ver el trabajo del curso
      // y las calificaciones en las clases que administras.
      'https://www.googleapis.com/auth/classroom.coursework.students',
      // Ver y gestionar notificaciones de Google Classroom
      'https://www.googleapis.com/auth/classroom.announcements',
      // Ver instrucciones del trabajo asignado por los profesores en tus
      // clases de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.course-work.readonly',
      // Ver los trabajos y las calificaciones de los alumnos de las clases que impartes
      // o administras en Google Classroom.
      // 'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly',
      // Ver los trabajos y las calificaciones de los cursos de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.student-submissions.me.readonly',
      // Ver los trabajos y las calificaciones de los cursos de Google Classroom
      'https://www.googleapis.com/auth/classroom.coursework.me',
      // Ver notificaciones de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.announcements.readonly',
      // Ver, editar y crear material de trabajo de clase en Google Classroom
      'https://www.googleapis.com/auth/classroom.courseworkmaterials',
      // Ver todo el material de trabajo de tus clases de Google Classroom
      // 'https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly',
      // Ver, crear y editar temas en Google Classroom
      'https://www.googleapis.com/auth/classroom.topics',
      // Ver temas en Google Classroom
      // 'https://www.googleapis.com/auth/classroom.topics.readonly',
      // Recibir notificaciones sobre tus datos de Google Classroom
      'https://www.googleapis.com/auth/classroom.push-notifications',
    ].join(' '),
    adminScopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      // View and manage customer related information
      'https://www.googleapis.com/auth/admin.directory.customer',

      // View customer related information
      'https://www.googleapis.com/auth/admin.directory.customer.readonly',

      // View and manage your Chrome OS devices' metadata
      'https://www.googleapis.com/auth/admin.directory.device.chromeos',

      // View your Chrome OS devices' metadata
      'https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly',

      // View and manage your mobile devices' metadata
      'https://www.googleapis.com/auth/admin.directory.device.mobile',

      // Manage your mobile devices by performing administrative tasks
      'https://www.googleapis.com/auth/admin.directory.device.mobile.action',

      // View your mobile devices' metadata
      'https://www.googleapis.com/auth/admin.directory.device.mobile.readonly',

      // View and manage the provisioning of domains for your customers
      'https://www.googleapis.com/auth/admin.directory.domain',

      // View domains related to your customers
      'https://www.googleapis.com/auth/admin.directory.domain.readonly',

      // View and manage the provisioning of groups on your domain
      'https://www.googleapis.com/auth/admin.directory.group',

      // View and manage group subscriptions on your domain
      'https://www.googleapis.com/auth/admin.directory.group.member',

      // View group subscriptions on your domain
      'https://www.googleapis.com/auth/admin.directory.group.member.readonly',

      // View groups on your domain
      'https://www.googleapis.com/auth/admin.directory.group.readonly',

      // View and manage notifications received on your domain
      'https://www.googleapis.com/auth/admin.directory.notifications',

      // View and manage organization units on your domain
      'https://www.googleapis.com/auth/admin.directory.orgunit',

      // View organization units on your domain
      'https://www.googleapis.com/auth/admin.directory.orgunit.readonly',

      // View and manage the provisioning of calendar resources on your domain
      'https://www.googleapis.com/auth/admin.directory.resource.calendar',

      // View calendar resources on your domain
      'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly',

      // Manage delegated admin roles for your domain
      'https://www.googleapis.com/auth/admin.directory.rolemanagement',

      // View delegated admin roles for your domain
      'https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly',

      // View and manage the provisioning of users on your domain
      'https://www.googleapis.com/auth/admin.directory.user',

      // View and manage user aliases on your domain
      'https://www.googleapis.com/auth/admin.directory.user.alias',

      // View user aliases on your domain
      'https://www.googleapis.com/auth/admin.directory.user.alias.readonly',

      // View users on your domain
      'https://www.googleapis.com/auth/admin.directory.user.readonly',

      // Manage data access permissions for users on your domain
      'https://www.googleapis.com/auth/admin.directory.user.security',

      // View and manage the provisioning of user schemas on your domain
      'https://www.googleapis.com/auth/admin.directory.userschema',

      // View user schemas on your domain
      'https://www.googleapis.com/auth/admin.directory.userschema.readonly',
    ].join(' '),
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
