const  config =  {
    port: 4000,
    host:'localhost',
    db: 'mongodb://127.0.0.1:27017/ts-node',
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIIBPAIBAAJBAI2ja+lGbf7zhNMeId7JVVOS6FxkD0JZMMyH4+2f8tokYnyS05xm
    NVtlhtjGirK8HwEpBH73jvdtu5Hs3ImRH8kCAwEAAQJAaztriowA4QHa8L8iY3pI
    OGLDupcimlfOQzsqjBAJm67EFehtbr0sMFzU3xDQKrdzdUk8dolX76WAsIup3qI5
    xQIhAOjbKHU/TZ+um26M8kL3K6185qGbCREvnQhmfniseMhDAiEAm7dMryKWzr3e
    ClhrimwC8/Szzd/MwYUbAr/3hImRLQMCIQC98xFE27fhm9j1TIrPb7u0kR++Eq9J
    0rJhyOJAZEk+6wIhAISAonE49qjv6bxV5xS/uneK12GtOdfGguiBH4cZZH6vAiEA
    54nCt4QIgphADch1S2oZlHxd2kAe73d9hslgmQyXMT4=
    -----END RSA PRIVATE KEY-----`,
    timeToExpired: "15m",
    refreshToken: "1y"
}

export default config