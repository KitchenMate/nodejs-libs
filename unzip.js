const {exec} = require('child_process');

exec('gzip -d ./libs/android/libnode/bin/arm64-v8a/libnode.so.gz', {cwd: __dirname});
exec('gzip -d ./libs/android/libnode/bin/armeabi-v7a/libnode.so.gz', {cwd: __dirname});
exec('gzip -d ./libs/android/libnode/bin/x86/libnode.so.gz', {cwd: __dirname});
exec('gzip -d ./libs/android/libnode/bin/x86_64/libnode.so.gz', {cwd: __dirname});
