import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';// defines stacks
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';

interface RDSStackProps extends cdk.StackProps { // passes the vpc from project sstack into this rds stack
    vpc: ec2.Vpc;
}

export class RDSStack extends cdk.Stack { // defining stack class
    constructor(scope: Construct, id: string, props: RDSStackProps) {
        super(scope, id, props);

        // RDS Configuration

        const subnetSelection: ec2.SubnetSelection ={
            subnetType: ec2.SubnetType.PRIVATE_ISOLATED // choosing from priv subnets for rds to be in
        };

        const iopsInstance = new rds.DatabaseInstance(this, 'IopsInstance', {
            vpc: props.vpc,
            vpcSubnets: subnetSelection,
            engine: rds.DatabaseInstanceEngine.mysql({ version: rds.MysqlEngineVersion.VER_8_0}),
            instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
            allocatedStorage: 20,
            deletionProtection: false,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            publiclyAccessible: false
        });

        cdk.Tags.of(iopsInstance).add('Name', 'MyPrivateRDS');

        new cdk.CfnOutput(this, 'RDSEndpoint', {
            value: iopsInstance.dbInstanceEndpointAddress,
            description: 'RDS Endpoint Address'
        });
    }
}