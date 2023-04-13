//
//  OFMCHttp.m
//  demo-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import "OFMCHttp.h"

typedef void (^HttpResultBlock)(BOOL ret, id responseObject);

@implementation OFMCHttp

// 重载
+ (NSString*)channelBaseName {
    return @"http";
}

#pragma mark - method call拼接后对应的方法

- (void)get:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"%@ %@", NSStringFromSelector(_cmd), arguments);
    
    NSString *url = arguments[@"url"];
    NSString *pstr = arguments[@"params"];
    NSDictionary *parameters = [OFUtils dicFromString:pstr];
    
    [self getWithURL:url parameters:parameters success:^(BOOL ret, id responseObject) {
        result([OFUtils stringFromDic:responseObject]);
    } failure:^(BOOL ret, id responseObject) {
        result([self createResultWithCode:-2 andMessage:@"request onFailure"]);
    }];
}

- (void)post:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"%@ %@", NSStringFromSelector(_cmd), arguments);
    
    NSString *url = arguments[@"url"];
    NSString *pstr = arguments[@"params"];
    NSDictionary *parameters = [OFUtils dicFromString:pstr];
    
    [self postWithURL:url parameters:parameters success:^(BOOL ret, id responseObject) {
        result([OFUtils stringFromDic:responseObject]);
    } failure:^(BOOL ret, id responseObject) {
        result([self createResultWithCode:-2 andMessage:@"request onFailure"]);
    }];
}

#pragma mark - tool

- (NSURLSessionTask *)getWithURL:(NSString *)url parameters:(NSDictionary *)parameters success:(HttpResultBlock)success failure:(HttpResultBlock)failure {
    NSString *paramString = @"";
    for( NSString *key in parameters ) {
        paramString = [NSString stringWithFormat:@"%@%@=%@",
                       paramString.length==0 ? @"?" : [NSString stringWithFormat:@"%@&", paramString] ,
                       key,
                       parameters[key]];
    }
    
    url = [NSString stringWithFormat:@"%@%@", url, paramString];
    
    NSURLSession *session = [NSURLSession sharedSession];
    NSURLSessionDataTask *task = [session dataTaskWithURL:[NSURL URLWithString:url] completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        if (!data || !response || error) {
            failure(NO, error);
            return;
        }
        NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableLeaves error:&error];
        success(YES, dic);
    }];
    [task resume];
    return task;
}

- (NSURLSessionTask *)postWithURL:(NSString *)url parameters:(NSDictionary *)parameters success:(HttpResultBlock)success failure:(HttpResultBlock)failure {
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:url]];
    [request setHTTPMethod:@"POST"];
    
    for( NSString *header in parameters ) {
        [request setValue:[NSString stringWithFormat:@"%@", parameters[header]] forHTTPHeaderField:header];
    }
    
    NSURLSessionConfiguration *configuration = [NSURLSessionConfiguration defaultSessionConfiguration];
    configuration.requestCachePolicy = NSURLRequestReloadIgnoringCacheData;
    NSURLSession *session = [NSURLSession sessionWithConfiguration:configuration];
    
    NSURLSessionDataTask *task = [session dataTaskWithRequest:request completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        if (!data || !response || error) {
            failure(NO, error);
            return;
        }
        NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableLeaves error:&error];
        success(YES, dic);
    }];
    [task resume];
    return task;
}

- (NSString *)createResultWithCode:(NSInteger)code andMessage:(NSString *)message
{
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    dict[@"code"] = @(code);
    dict[@"errmsg"] = message;
    
    return [OFUtils stringFromDic:dict];
}
@end
