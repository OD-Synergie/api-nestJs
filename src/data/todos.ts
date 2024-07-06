export const todos = [
  {
    back: [
      {
        feature: 'add a logger',
        ticket_number: 'BACK-1',
        description:
          'Verify Cors enabling. Explain in README.md cors principles and options',
      },
      {
        feature: 'add a swagger',
        ticket_number: 'BACK-2',
        description:
          'Add a swagger. Explain in README.md how to access swagger',
      },
      {
        feature: 'add a logger',
        ticket_number: 'BACK-3',
        description:
          'Add a logger. Explain in README.md how to set logs in the code',
      },
      {
        feature: 'Add a mongo connection',
        ticket_number: 'BACK-4',
        description:
          'Create a mongo connection. Create a todo collection. Create routes to create, read, update and delete todos. Detail in README.md todos structure',
      },
      {
        feature: 'Add a collection for contributors',
        ticket_number: 'BACK-6',
        description:
          'Create a mongo contributors collection. Create routes to create, read, update and delete contributors. Detail in README.md contributors structure',
      },
      {
        feature: 'Add a tool to visualise mogo data',
        ticket_number: 'BACK-7',
        description:
          'Add a tool to visualise mogo data. Detail in README.md how to set it up for people',
      },
    ],
    front: [
      {
        feature: 'Make front and back communicate',
        ticket_number: 'FRONT-1',
        description: 'Use axios to make apps communicate, and disply todos on main page',
      },
      {
        feature: 'add three routes: home, todos an contributors',
        ticket_number: 'FRONT-2',
        description: 'Add routes and links to navigate, and list contributors on contributors page',
      },
      {
        feature: 'add shadcn component for cards',
        ticket_number: 'FRONT-3',
        description: 'Add a card for each todo and each contributor',
      },
    ],
    ops: [
      {
        feature: 'add two containers, one for api, one for client',
        ticket_number: 'DOCKER-1',
        description:
          'Use last node lts versions for containers, and set up a compose yaml. Detail in README.md how to launch stack easily',
      },
      {
        feature: 'explain how to use rancher, free, when docker desktop is not anymore',
        ticket_number: 'DOCKER-2',
        description:
          'Detail in README.md how to use rancher or another alternative to docker desktop',
      },
      {
        feature: 'Add a container for mongo',
        ticket_number: 'DOCKER-3',
        description:
          'Create a container fo mongo. Mak back container communicate with backen via a network. Explain networks in README',
      },
    ],
    po: [
      {
        feature: 'tickets_creation',
        ticket_number: 'PO-1',
        description: 'Create new tickets',
      },
      {
        feature: 'onboarding',
        ticket_number: 'PO-2',
        description: 'Detail in README.md how to contribute to project',
      },
    ],
    ux: [
      {
        feature: 'Team working app',
        ticket_number: 'UX_1',
        description:
          'Select a tool and think about screens for a todo application',
      },
    ],
    ui: [
      {
        feature: 'Team working app',
        ticket_number: 'UI-1',
        description: 'Select a tool and suggest a wireframe for todos page',
      },
    ],
  },
];
