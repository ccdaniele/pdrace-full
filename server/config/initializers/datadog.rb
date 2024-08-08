
require 'ddtrace'

#### ------------------------ TRACER CONFIGURATION -------------------------
#### https://docs.datadoghq.com/tracing/trace_collection/custom_instrumentation/ruby/?tab=activespan
#### https://github.com/DataDog/dd-trace-rb/blob/master/docs/GettingStarted.md#additional-configuration



Datadog.configure do |c|

  c.agent.port = 8136
  c.tracing.instrument :rails
  # c.agent.host = 'datadog-pdrace.default.svc.cluster.local'

  c.service = 'pd-users-api'
  c.env = 'monolitic'
  c.version = 'v1.0.0'

  c.tracing.report_hostname = false
  c.profiling.enabled = false
  # c.tracing.test_mode.enabled = (ENV['RACK_ENV'] == 'dev')

###Correlating DB and traces
  c.tracing.instrument :pg, comment_propagation: 'full'

###(traces and logs correlation)
  c.tracing.log_injection = true

###(runtime metrics)
  c.runtime_metrics.enabled = true
  # c.runtime_metrics.statsd = Datadog::Statsd.new

###(Startup logs)
  c.diagnostics.startup_logs.enabled = false
  c.diagnostics.debug = false
end
