import tracer from "dd-trace";
tracer.init({logInjection: true, env: 'develop', service: process.env.SERVICE_NAME});
export default tracer;