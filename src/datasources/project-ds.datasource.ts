import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'project_ds',
  connector: 'memory',
  localStorage: '',
  file: ''
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ProjectDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'project_ds';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.project_ds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
