using Microsoft.Xrm.Sdk;
using Xrm.Application.Events;
using Xrm.Domain.Crm;
using Xrm.Domain.Flow;
using Xrm.Domain.Interfaces;

namespace Xrm.Application.Commands.Accounts
{
    public class SampleCommand : ICommand
    {
        public Account Target { get; set; }

        public IPluginExecutionContext ExecutionContext { get; set; }

        public class Handler : CommandHandler<SampleCommand>
        {
            public Handler(FlowArguments flowArgs) : base(flowArgs)
            {
            }

            public override VoidEvent Execute(SampleCommand command)
            {
                return VoidEvent;
            }
        }
    }
}
