export const todos = [
  {
    back: [
      {
        feature: 'add a swagger',
        ticket_number: 'BACK-1',
        description:
          'Add a swagger. Explain in README.md how to access swagger',
      },
    ],
    front: [
      {
        feature: 'add three routes: home, todos an contributors',
        ticket_number: 'FRONT-1',
        description: 'Add routes and links to navigate',
      },
    ],
    ops: [
      {
        feature: 'add two containers, one for api, one for client',
        ticket_number: 'DOCKER-1',
        description:
          'Use last node lts versions for containers, and set up a compose yaml. Detail in README.md how to launch stack easily',
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
